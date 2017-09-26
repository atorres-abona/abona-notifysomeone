// NOTE object below must be a valid JSON
window.NotifySomeone = $.extend(true, window.NotifySomeone, {
    "config": {
        "layoutSet": "navbar",
        "navigation": [
            {
                title: "Home",
                onExecute: "#home",
                icon: "home"
            },
            {
                title: "About",
                onExecute: "#about",
                icon: "info"
            }
        ]
    }
});