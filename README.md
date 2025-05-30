# jQuery-selector-associated

This library implements cascading dropdown selectors where the options in subsequent dropdowns depend on the selection made in previous dropdowns.

## Installation

Import directly in html file.

``` html
<!-- HTML -->

<script src="path/jQuery-selector-associated/selector-associated.js"></script>
```

## Usage

### Library settings

``` bash
# Edit default setting
vi path/jQuery-selector-associated/selector-associated.js
```

### How to use

``` html
<!-- HTML -->

<!-- Add data attribute "WKS" to your select elements -->
<select data-selector="WKS"></select>
```

``` javascript
<!-- JavaScript -->

// Initialize the associated selector
$('[data-selector="WKS"]').WKS_cal(settings);
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
