# Sprints

AI is fed prompt so that I have direction as I work and if I ask questions / need help the LLM _should_ act as a tutor and _shouldn't_ just provide the solution.

## Sprint 1 11/16/26

Cleanup warm-up (5 min)
Delete the placeholder 1 groups and separators in Toolbar.jsx.
Remove the duplicate .toolbar rules from index.css, keeping the ones in toolbar.css.
Fix the key warning in Spreadsheet.jsx.
Closing the dropdown (15 to 20 min)
Close on clicking outside, using toolbarRef and a listener on document.
Close on Escape.
Close after picking a menu item.
Switch menus on hover while one is open.
Context and controlled cells (20 min)
Create a context in src/context/ that holds the 2D cells array and an update function.
Wrap the app in the provider.
Make each <input> controlled: its value comes from state, and onChange updates state immutably.
Persistence (10 to 15 min)
Load from localStorage on the first render using a lazy initializer.
Save with a debounced useEffect.
Make sure missing or corrupted saved data doesn’t crash the app.
Check it works
Type in a few cells, refresh, and confirm the data is still there.
Look under DevTools → Application → Local Storage to see what got saved.
