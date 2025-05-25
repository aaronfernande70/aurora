import React, { useState, useRef } from 'react';
import './Combobox.css';

interface Option {
    value: string;
    label: string;
}

interface ComboboxProps {
    type: 'input' | 'select';
    options: Option[];
    onSelect: (value: string) => void; // Callback function to notify parent
}

const Combobox: React.FC<ComboboxProps> = ({ type, options, onSelect }) => {
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleOptionClick = (value: string) => {
        setSelectedOption(value);
        setIsOpen(false);
        setHighlightedIndex(-1);
        onSelect(value); // Notify parent with the selected value
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSelectedOption(value);
        setHighlightedIndex(-1);

        setFilteredOptions(
            options.filter((option) =>
                option.label.toLowerCase().includes(value.toLowerCase())
            )
        );
        setIsOpen(true);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!isOpen) return;

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setHighlightedIndex((prev) =>
                    prev < filteredOptions.length - 1 ? prev + 1 : 0
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setHighlightedIndex((prev) =>
                    prev > 0 ? prev - 1 : filteredOptions.length - 1
                );
                break;
            case 'Enter':
                e.preventDefault();
                if (highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
                    handleOptionClick(filteredOptions[highlightedIndex].value);
                }
                break;
            case 'Escape':
                e.preventDefault();
                setIsOpen(false);
                break;
            default:
                break;
        }
    };

    const handleBlur = () => {
        setTimeout(() => setIsOpen(false), 100); // Delay to allow click events to register
    };

    if (type === 'input') {
        return (
            <div
                className="Aurora_Style_Combobox"
                role="combobox"
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                aria-owns="combobox-listbox"
                aria-controls="combobox-listbox"
            >
                <input
                    ref={inputRef}
                    type="text"
                    value={selectedOption}
                    onChange={handleInputChange}
                    onFocus={() => setIsOpen(true)}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    className="Aurora_Style_Select Aurora_Style_Input"
                    aria-autocomplete="list"
                    aria-controls="combobox-listbox"
                    aria-activedescendant={
                        highlightedIndex >= 0
                            ? `option-${filteredOptions[highlightedIndex].value}`
                            : undefined
                    }
                />
                {isOpen && (
                    <div
                        id="combobox-listbox"
                        role="listbox"
                        className="Aurora_Style_Dropdown"
                    >
                        {filteredOptions.map((option, index) => (
                            <div
                                id={`option-${option.value}`}
                                role="option"
                                key={option.value}
                                data-value={option.value}
                                className={`Aurora_Style_Option ${
                                    highlightedIndex === index
                                        ? 'Aurora_Style_Option--highlighted'
                                        : ''
                                }`}
                                aria-selected={highlightedIndex === index}
                                onMouseDown={() => handleOptionClick(option.value)}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <select
            className="Aurora_Style_Combobox Aurora_Style_Select"
            value={selectedOption}
            onChange={(e) => {
                const value = e.target.value;
                setSelectedOption(value);
                onSelect(value); // Notify parent with the selected value
            }}
            aria-label="Select an option"
        >
            {options.map((option) => (
                <option
                    key={option.value}
                    value={option.value}
                    className="Aurora_Style_Option"
                >
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Combobox;