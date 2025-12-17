---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5K5DU2O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESo2JS5a4ze2ShWkAZCdYEaSMIlcheFVR11QSGBpohXAiEAsjgw%2FMRKNilTeeI4m8rQrofymO67hbgq4mzV8sdsSY0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLYHJQ%2BXF1rjSiG%2BvircA64QhcPNPXEhqUJq6aGyDuC2fYg1hy%2BZpi16mfhuhmKfGt1YcYO5SJP%2BbOAE6OXRYRvpG9MDV9cPDj9zrkOkH1ldgypo0D5dEgG2StqsDuDS527%2BZ5oni4mgC%2FN07Kv%2BXHp3bTjbgmdr%2B3JIlQqv4VEbdbYV4d3qQniEHxnE1AhFhYuNr1vg69%2BqvrEt64YBMYZjXbrzcTobxxSUQsbZu2CMXnkpZXMTiSMygAL%2Biw7BHzgYGXTrPoYbcHVLrEuiI3MAIbu0%2ByGI1DWqCGqwBUgrP30FJlC%2FQ5EtQtYTvQ1lOtCrchoD%2BKRRbRKh73y6R3Vo27eSjF14vE0HlN54kgJaKhay9hJZI0qFQt%2B3BcUeRtcDaZTKPrZYPQF1l%2FrSkoX9phEuJ3Zn5MeeSOuMYQtyhDMjIsSkw5f%2B7OKGFRKkDivW3GqWn4Jo81%2BlDAuvO%2FrrqABwU%2FVOJEQp%2Bk6yw8a%2Byi9NEfCIuf3qW25dbWH1f51VfdZoaBTFqW%2BviSrk%2F6aQm3RvhunaK12bzXMesr9CVEHj22z41N0WHliFCHUzmfog2fmBOMZj0HlpoO%2FWlogCFk4uANjLAr1nGbBLP0H9Ek9e%2B7DuYzRkVKSPW%2FKBuTC4sK8gk1DGIXI3MPLFisoGOqUBYVOdHoTCY046CMOM4YClwVzUXoe8%2BCRusQq1LKwW8e%2FztJesaQfx7J0UFZQ3xegcZpT2hfxqRmaEeILGgYf5vIM6CjE1qPfYNmmGxOzOPOmvgxoo0thnWWdJSB9gvXzyxb8kLSQ6L5qPbwpdkwIWPQvfBgAeZ9CigN6t%2FIJzLzv%2FMJvTFe%2F8oU1VaF1nCu2uxghO52t0sztz42pKds4B864Usvig&X-Amz-Signature=0e5ef74b65480ed357ba463f0e88afcd5420e86a9f165626758680c59d607a37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5K5DU2O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESo2JS5a4ze2ShWkAZCdYEaSMIlcheFVR11QSGBpohXAiEAsjgw%2FMRKNilTeeI4m8rQrofymO67hbgq4mzV8sdsSY0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLYHJQ%2BXF1rjSiG%2BvircA64QhcPNPXEhqUJq6aGyDuC2fYg1hy%2BZpi16mfhuhmKfGt1YcYO5SJP%2BbOAE6OXRYRvpG9MDV9cPDj9zrkOkH1ldgypo0D5dEgG2StqsDuDS527%2BZ5oni4mgC%2FN07Kv%2BXHp3bTjbgmdr%2B3JIlQqv4VEbdbYV4d3qQniEHxnE1AhFhYuNr1vg69%2BqvrEt64YBMYZjXbrzcTobxxSUQsbZu2CMXnkpZXMTiSMygAL%2Biw7BHzgYGXTrPoYbcHVLrEuiI3MAIbu0%2ByGI1DWqCGqwBUgrP30FJlC%2FQ5EtQtYTvQ1lOtCrchoD%2BKRRbRKh73y6R3Vo27eSjF14vE0HlN54kgJaKhay9hJZI0qFQt%2B3BcUeRtcDaZTKPrZYPQF1l%2FrSkoX9phEuJ3Zn5MeeSOuMYQtyhDMjIsSkw5f%2B7OKGFRKkDivW3GqWn4Jo81%2BlDAuvO%2FrrqABwU%2FVOJEQp%2Bk6yw8a%2Byi9NEfCIuf3qW25dbWH1f51VfdZoaBTFqW%2BviSrk%2F6aQm3RvhunaK12bzXMesr9CVEHj22z41N0WHliFCHUzmfog2fmBOMZj0HlpoO%2FWlogCFk4uANjLAr1nGbBLP0H9Ek9e%2B7DuYzRkVKSPW%2FKBuTC4sK8gk1DGIXI3MPLFisoGOqUBYVOdHoTCY046CMOM4YClwVzUXoe8%2BCRusQq1LKwW8e%2FztJesaQfx7J0UFZQ3xegcZpT2hfxqRmaEeILGgYf5vIM6CjE1qPfYNmmGxOzOPOmvgxoo0thnWWdJSB9gvXzyxb8kLSQ6L5qPbwpdkwIWPQvfBgAeZ9CigN6t%2FIJzLzv%2FMJvTFe%2F8oU1VaF1nCu2uxghO52t0sztz42pKds4B864Usvig&X-Amz-Signature=c2e2a13c715c6e39b67f0feeacaac9e28314b269f5a1712aa89e2b08a8662888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

