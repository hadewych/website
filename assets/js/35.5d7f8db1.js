(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{310:function(t,a,e){"use strict";e.r(a);var s=e(2),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"reading-local-manga"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reading-local-manga"}},[t._v("#")]),t._v(" Reading local manga")]),t._v(" "),e("p",[t._v("You have to first create a folder named "),e("code",[t._v("local")]),t._v(" in Tachiyomi folder, which is located in the phone's "),e("code",[t._v("Internal storage")]),t._v(" or external SD card. Then place your manga inside "),e("code",[t._v("Tachiyomi/local")]),t._v(" folder.")]),t._v(" "),e("p",[t._v("After that, the manga be can be found in "),e("code",[t._v("Local manga")]),t._v(", which is located under "),e("code",[t._v("Catalogues")]),t._v(" as a new source.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("IMPORTANT")]),t._v(" "),e("p",[t._v("Remember to give the app disk permissions on Android 6 and newer.")])]),t._v(" "),e("p",[t._v("If you add more chapters then you'll have to manually refresh the chapter list (by pulling down the list).")]),t._v(" "),e("p",[t._v("Supported chapter formats are directories with pictures inside, "),e("code",[t._v("ZIP")]),t._v("/"),e("code",[t._v("CBZ")]),t._v(", "),e("code",[t._v("RAR")]),t._v("/"),e("code",[t._v("CBR")]),t._v(" and "),e("code",[t._v("EPUB")]),t._v(". But expect better performance with directories and "),e("code",[t._v("ZIP")]),t._v("/"),e("code",[t._v("CBZ")]),t._v(".")]),t._v(" "),e("p",[t._v("You can also place your chapters or manga in both storages and Tachiyomi will merge them.")]),t._v(" "),e("p",[t._v("You can then access the manga in "),e("code",[t._v("Catalogues > Local manga")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"folder-structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#folder-structure"}},[t._v("#")]),t._v(" Folder Structure")]),t._v(" "),e("p",[t._v("Tachiyomi requires a specific folder structure for local manga to be correctly processed. Local manga will be read from the "),e("code",[t._v("Tachiyomi/local")]),t._v(" folder. Each manga must have a "),e("code",[t._v("Manga")]),t._v(" folder and a "),e("code",[t._v("Chapter")]),t._v(" folder. Images will then go into the chapter folder. See below for more information on archive files. You can refer to the following example:")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("EXAMPLE")]),t._v(" "),e("div",{staticClass:"side-by-side"},[e("ul",{staticClass:"file-tree"},[e("li",[t._v("\n\t\t\t/sdcard/Tachiyomi/local\n\t\t\t"),e("ul",[e("li",[t._v("\n\t\t\t\t\tMy manga\n\t\t\t\t\t"),e("ul",[e("li",[t._v("\n\t\t\t\t\t\t\tch1\n\t\t\t\t\t\t\t"),e("ul",[e("li",{staticClass:"file"},[t._v("files")])])]),t._v(" "),e("li",[t._v("\n\t\t\t\t\t\t\tch2\n\t\t\t\t\t\t\t"),e("ul",[e("li",{staticClass:"file"},[t._v("files")])])])])]),t._v(" "),e("li",[t._v("…")])])])]),t._v(" "),e("ul",{staticClass:"file-tree"},[e("li",[t._v("\n\t\t\t/storage/18F5-2C11/Tachiyomi/local\n\t\t\t"),e("ul",[e("li",[t._v("\n\t\t\t\t\tMy manga\n\t\t\t\t\t"),e("ul",[e("li",[t._v("\n\t\t\t\t\t\t\tch3\n\t\t\t\t\t\t\t"),e("ul",[e("li",{staticClass:"file"},[t._v("files")])])]),t._v(" "),e("li",[t._v("\n\t\t\t\t\t\t\tch4\n\t\t\t\t\t\t\t"),e("ul",[e("li",{staticClass:"file"},[t._v("files")])])])])]),t._v(" "),e("li",[t._v("…")])])])])])]),t._v(" "),e("p",[t._v("Tachiyomi will see four chapters in a single manga.")]),t._v(" "),e("p",[t._v("The path to the folder with images must contain both the manga title and the chapter name (as seen above).")]),t._v(" "),e("h2",{attrs:{id:"archive-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#archive-files"}},[t._v("#")]),t._v(" Archive Files")]),t._v(" "),e("p",[t._v("Archive files such as "),e("code",[t._v("ZIP")]),t._v("/"),e("code",[t._v("CBZ")]),t._v(" are supported but the folder structure inside is not. Any folders inside the archive file are ignored. You must place the archive inside the "),e("code",[t._v("Manga")]),t._v(" folder where the name will become the "),e("code",[t._v("Chapter")]),t._v(" title. All images inside the archive regardless of folder structure will become pages for that chapter.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("ZIP EXAMPLE")]),t._v(" "),e("ul",{staticClass:"file-tree"},[e("li",[t._v("\n\t\t\t/sdcard/Tachiyomi/local\n\t\t\t"),e("ul",[e("li",[t._v("\n\t\t\t\t\tMy manga\n\t\t\t\t\t"),e("ul",[e("li",[t._v("\n\t\t\t\t\t\t\tch1.zip\n\t\t\t\t\t\t\t"),e("ul",[e("li",{staticClass:"file"},[t._v("img files")])])]),t._v(" "),e("li",[t._v("\n\t\t\t\t\t\t\tch2.zip\n\t\t\t\t\t\t\t"),e("ul",[e("li",[t._v("\n\t\t\t\t\t\t\t\t\tch2\n\t\t\t\t\t\t\t\t\t"),e("ul",[e("li",{staticClass:"file"},[t._v("img files")])])])])])])]),t._v(" "),e("li",[t._v("…")])])])])]),t._v(" "),e("h2",{attrs:{id:"advanced"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#advanced"}},[t._v("#")]),t._v(" Advanced")]),t._v(" "),e("h3",{attrs:{id:"local-manga-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#local-manga-details"}},[t._v("#")]),t._v(" Local Manga Details")]),t._v(" "),e("p",[t._v("Starting with development version "),e("code",[t._v("r1628")]),t._v(" and above, it is now possible to add details to local manga. Like manga from other catalogs, you add information about the manga such as the author, artist, description, and genre tags.")]),t._v(" "),e("p",[t._v("To import details along with your local manga, you have to create a file called "),e("code",[t._v("details.json")]),t._v(" and place it within the manga folder. This file will contain the extended details about the manga in the "),e("code",[t._v("json")]),t._v(" format. You can see the example below on how to build the file. Once the file is there, the app should load the data when you first open the manga or you can pull down to refresh the details.")]),t._v(" "),e("p",[t._v("You can copy the following example and edit the details as needed:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example Title"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"author"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example Author"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"artist"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example Artist"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example Description"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"genre"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"genre 1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"genre 2"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"etc"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_status values"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 = Unknown"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1 = Ongoing"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2 = Completed"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3 = Licensed"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);