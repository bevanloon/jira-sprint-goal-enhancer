# Installation

* Clone the repo or download the code and unzip it.
* Open a new chrome tab and navigate to `chrome://extensions`.
* Toggle the `Developer mode` switch to the right of the screen.
* Click the `Load unpacked` button and select the directory where you cloned or unzipped the code.

You should be able to pin the extension which will give you a nice button to click in your chrome toolbar.

# Limitations

The extension splits the sprint goals on `\n` in the `title` tag of the sprint goal `span` element.

It expects the markup similar to the following:

```
<div class="ghx-sprint-goal"><span title="Sprint goal 1
Sprint goal 2">Sprint goal 1 Sprint goal 2</span></div>
```
