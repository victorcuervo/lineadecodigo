---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BSHUGTV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T103715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErplyopvdpidsJmpAfpOrWvK0RNVkRDTsxA7q5QOpNcAiA8xGB%2FUsmlI%2BMcFqz97lSi60XZv1KeCuL1GAH0V8tQ%2ByqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyrJjEjOlxNxnwi6TKtwDL4KfGWK5slYX%2B2bOmICC6Qa%2Bp0Xhtl3gTqeAGUxQaQUs9vRVX8QtPU0umUZNcKb3JPyhuF67QGfLThboty6afCHGECTg354V%2BeQsG4fW%2F2Htl5vHeaosCN4xAZ1PcTcuHfAe2agMIMtBNXlmVaZmmCPLsqb1DRj84coI5IHlNhn436Xk%2FFIc8U7mrrl90BkBq9KkMTEGrVUU2fsfVSflUx6t15OLqqMct%2BgBARDGPI1hMUWedRZe41E1VaNwMOY5Td4nCh944CZEgfAN%2BwdDGOjryDO6aUtaZh648JHyV4NwV7eCILoWhllIEDReR1JQWM6zapgKjKO8cS1tBYpoQiB7Oi3TXRULpePl1LfHAmYXCcRqRoVeivLFjyXA%2Fk5df1noptXgJKA6ynEgo30T13VQoi9oJKt4z8zxgTkjQCtn%2F8mR4BOllv4XryHJRvm%2BMd8St%2F1HdFBBBH9SR%2FkGCCFreF5uhUf8rjQuZNrW9no2TdARoM%2BHNi6U7XJLcCi%2FkxPPJsJDGLp4b9GFgGxq6X0cKiUILafHT4EQixyAZsEKA1RrH3gcl7J2TdraWP%2B1oEGfQslA5NsGR7mEjh7yDljyp%2FF2ED8d%2FtNWdLz7%2Bd4qxxcCeAjwOCCAcWEwyJnVyQY6pgFq4fg8GVlr006hPUnZYFiyVhZTgb5%2BhHy9tGuH4981CvrwgdxYlGyNA3ob%2FcFG6JFFu0s5GRYcAkRZeisKvc0GxdOADFbEo1Tk5WvE3AzvCS2uXzRFO5X276xz00FUcIjejp95VnollaEbqjhKSSpdJf5nxgm23pmqKPP3JEzQXbnYTHfDCzNTtuJW00lyEAgM30YOec1PyapxrafvXHGyyHuyu%2FH0&X-Amz-Signature=f15b1eec0df85c09c581879369f5965b3391967b44a513810e47db37a636ab23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BSHUGTV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T103715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErplyopvdpidsJmpAfpOrWvK0RNVkRDTsxA7q5QOpNcAiA8xGB%2FUsmlI%2BMcFqz97lSi60XZv1KeCuL1GAH0V8tQ%2ByqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyrJjEjOlxNxnwi6TKtwDL4KfGWK5slYX%2B2bOmICC6Qa%2Bp0Xhtl3gTqeAGUxQaQUs9vRVX8QtPU0umUZNcKb3JPyhuF67QGfLThboty6afCHGECTg354V%2BeQsG4fW%2F2Htl5vHeaosCN4xAZ1PcTcuHfAe2agMIMtBNXlmVaZmmCPLsqb1DRj84coI5IHlNhn436Xk%2FFIc8U7mrrl90BkBq9KkMTEGrVUU2fsfVSflUx6t15OLqqMct%2BgBARDGPI1hMUWedRZe41E1VaNwMOY5Td4nCh944CZEgfAN%2BwdDGOjryDO6aUtaZh648JHyV4NwV7eCILoWhllIEDReR1JQWM6zapgKjKO8cS1tBYpoQiB7Oi3TXRULpePl1LfHAmYXCcRqRoVeivLFjyXA%2Fk5df1noptXgJKA6ynEgo30T13VQoi9oJKt4z8zxgTkjQCtn%2F8mR4BOllv4XryHJRvm%2BMd8St%2F1HdFBBBH9SR%2FkGCCFreF5uhUf8rjQuZNrW9no2TdARoM%2BHNi6U7XJLcCi%2FkxPPJsJDGLp4b9GFgGxq6X0cKiUILafHT4EQixyAZsEKA1RrH3gcl7J2TdraWP%2B1oEGfQslA5NsGR7mEjh7yDljyp%2FF2ED8d%2FtNWdLz7%2Bd4qxxcCeAjwOCCAcWEwyJnVyQY6pgFq4fg8GVlr006hPUnZYFiyVhZTgb5%2BhHy9tGuH4981CvrwgdxYlGyNA3ob%2FcFG6JFFu0s5GRYcAkRZeisKvc0GxdOADFbEo1Tk5WvE3AzvCS2uXzRFO5X276xz00FUcIjejp95VnollaEbqjhKSSpdJf5nxgm23pmqKPP3JEzQXbnYTHfDCzNTtuJW00lyEAgM30YOec1PyapxrafvXHGyyHuyu%2FH0&X-Amz-Signature=6943a612344a0b43120cc3a9a2b5c8b0c27a0ae00e7773316f6887a760d41385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

