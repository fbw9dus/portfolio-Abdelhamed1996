# Profil-Seite

![layout](drafts/page.png "Portfolio Seite")

- Seite nur für mobile
- meta Tag für die korrekte Skalierung auf Handys benutzen:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ```
- Link für Email, der E-Mail Anwendung öffnet (0/5)
- Link für Telefon, der Telefon-Anwendung öffnet (0/5)
```diff
- Email-Adresse und Telefonnummer sind nicht verlinkt
```
- Link zum Lebenslauf(PDF), der einen Download auslöst (0/5)
```diff
- Es gibt keinen Download-Link
```
- Links zu Social Media Profilen
  - Haben Icons der Dienste (10/10)
  - Sollen in einem neuen Tab öffnen (0/5)
```diff
- Die Icons sind nicht verlinkt und die Links haben kein target-Attribut
```
  
- Foto, das im Kreis dargestellt wird, mit border-radius (5/5)
- Navigation zu den Abschnitten mit Hash-Links (10/10)
- Bilder im Portfolio sollen verlinkt sein (0/10)

## Anforderungen für den Code
- Keine Block-Tags in Inline-Tags (10/10)
- Padding in den Links der Hauptnavigation (9/10)
```diff
- Das hast du mit flexbox statt padding gelöst. Die Lösung ist in Ordnung.
```
- Abstand zwischen Text und Fensterrand und zwischen Text und Element-Rand (10/10)
- Korrekte html-Grundstruktur (html, head, body) (10/10)
- Keine Viewport-Elemente im head (5/5)

### Punkte
(**66**/100)
