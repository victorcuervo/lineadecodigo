---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6FPRIXS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T031300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOhNSFC2gsH%2FoqaSdxc3eV8FoPqPTskvgrZDpVYhJUvAiAdwGoPav6BxgDc0wHXdXGhJ46pBlMK4qfqtaIZLk3XSSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM57TcIgltteKWLAwvKtwD1iJ9IU6BRarvXrALnANjg294fjJv6qpvtZqcEk2nz09t2Nlbm4P4%2B88YG%2FmzEgvn6jnMNgWf7m7O3DudYUSVkbO1NSp9BACm6kkF4LwoAZgqsrDqJl0zbnHnC94E8w5VhDwzlHFQPmStg54l25L5adzXpSeS7z8rgu%2FUv94oQX2LUz5xPLODXUOfrfs2ZIBwE1%2FS3z5QXoPnqKHlkcGGRQbSrV86YYy5ccuXKKnhEs%2FchvgcdliFc%2F9%2FClR4Pp%2FPAEnUFe1SJEJ4mXgZ2MCpL1hCbO9asQayNTyymgDKLirLAalWo5Cnv957WavN%2BK07KUibBAeGulRHpLigHwmo1BESPbgA9euYmYjs9N8QxYHXlG%2FjF5%2BN6ZfnVw7lZ0YvHlhZOLOSoWYcXgC75CzVvTqIDnpqPHkVEhwWyUNsidAespvoN6jhKlbgnVZ4yxsCj8gzVkI7sDi5wtgjQBO2AL3v6UT0b8rpNz6Qlq8em0lc%2BFU%2BaLREYLv3zFDNsvVKHSwcS%2Botjazv1KSUmge8N6CZSkezztXESXhohvX%2FT%2BkHCB1K%2FMzZh2mrYb5uCxEoWm6ESK%2FXWLmv58Oamj2jKb3LWFXBP62%2FFry3%2BKnSNa%2B5N5HAiIrV26XAIbswov3SyQY6pgGalDluycftFPApXmyQdF4rM3%2BqB6%2FZTRlfvfegTOAvEsZ3zxouQiCzDhv85BlzdPv8EO8PVXYGX9r1o9dxmoCOc4N2R5s4HPQogcMKtgIBaeRidUf5n7rQdNk0CQ%2F%2BI2ZABrm9im%2BZQkJd%2BKqg%2Fe9uJst5PdCQmk25i%2F5ex9Bvijmoa6ASZGIW71q%2FT3Y8mXkji84OIhwahMQePup7Xyk9EM3L793M&X-Amz-Signature=17d9f1cfe7aee8aa8af8fa91e09e5f1bd6c432ebf7206183607ff45ae185a430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6FPRIXS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T031300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOhNSFC2gsH%2FoqaSdxc3eV8FoPqPTskvgrZDpVYhJUvAiAdwGoPav6BxgDc0wHXdXGhJ46pBlMK4qfqtaIZLk3XSSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM57TcIgltteKWLAwvKtwD1iJ9IU6BRarvXrALnANjg294fjJv6qpvtZqcEk2nz09t2Nlbm4P4%2B88YG%2FmzEgvn6jnMNgWf7m7O3DudYUSVkbO1NSp9BACm6kkF4LwoAZgqsrDqJl0zbnHnC94E8w5VhDwzlHFQPmStg54l25L5adzXpSeS7z8rgu%2FUv94oQX2LUz5xPLODXUOfrfs2ZIBwE1%2FS3z5QXoPnqKHlkcGGRQbSrV86YYy5ccuXKKnhEs%2FchvgcdliFc%2F9%2FClR4Pp%2FPAEnUFe1SJEJ4mXgZ2MCpL1hCbO9asQayNTyymgDKLirLAalWo5Cnv957WavN%2BK07KUibBAeGulRHpLigHwmo1BESPbgA9euYmYjs9N8QxYHXlG%2FjF5%2BN6ZfnVw7lZ0YvHlhZOLOSoWYcXgC75CzVvTqIDnpqPHkVEhwWyUNsidAespvoN6jhKlbgnVZ4yxsCj8gzVkI7sDi5wtgjQBO2AL3v6UT0b8rpNz6Qlq8em0lc%2BFU%2BaLREYLv3zFDNsvVKHSwcS%2Botjazv1KSUmge8N6CZSkezztXESXhohvX%2FT%2BkHCB1K%2FMzZh2mrYb5uCxEoWm6ESK%2FXWLmv58Oamj2jKb3LWFXBP62%2FFry3%2BKnSNa%2B5N5HAiIrV26XAIbswov3SyQY6pgGalDluycftFPApXmyQdF4rM3%2BqB6%2FZTRlfvfegTOAvEsZ3zxouQiCzDhv85BlzdPv8EO8PVXYGX9r1o9dxmoCOc4N2R5s4HPQogcMKtgIBaeRidUf5n7rQdNk0CQ%2F%2BI2ZABrm9im%2BZQkJd%2BKqg%2Fe9uJst5PdCQmk25i%2F5ex9Bvijmoa6ASZGIW71q%2FT3Y8mXkji84OIhwahMQePup7Xyk9EM3L793M&X-Amz-Signature=3947841ef7da200ffd4dc729059d9923a9932f7918ef718bd6ad8da4e4b93193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

