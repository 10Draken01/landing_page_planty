export class HomeProvider {
    // Lógica y estado relacionados con la funcionalidad de "Home"
    private _isLightTheme: boolean = true;
    
    get isLightTheme() {
        return this._isLightTheme;
    }

    set toggleTheme(value: boolean) {
        this._isLightTheme = value;
    }
}   