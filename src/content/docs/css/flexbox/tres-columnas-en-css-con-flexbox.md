---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWRCWNA7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzJIixVGvaqjTGVAzHiOKAYL1F9lL58eyu0xyWztZ5vAiAkDAUwbb0jEXOs09M%2FC%2FzSJQpzCILkZa0gz6N215jlVyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYgXTXS5nAesZ7m3jKtwDgpF9MsLK%2Budsui5zWdKVaWugziDIF%2FJLnzh15mMa%2Bz3CcoGvYAvlw15KCyTdbfb%2FLOuZYi4o37d61Ym%2FJ%2FK3dH%2BxLvCDCuukXr8KHNjdgTqpDQ9Ow%2FBUZBmvlXu90Xxc3bgCwm882BQaQxlDaCgKyr31jGxoZWvCNVQqm5sQ8%2Bx0YxeQZR6%2FeY5SJowVpe1erAroqFiqfArZz2GkJrEpDfKvr76q8XxSYiKMeK7OHodzli9StL67sNKcsEq2XN0Ci6Tgar%2BU4ezUc2xSLHKgKc4Z7DrxAtLrRNMTE5%2Bp7ysjbpksPo1a%2Bmy7bmUgUqu9pPg%2BktWT0fEY51Nb%2FT4pqY2S9%2Fq%2FesXh7i3v9ZuqHb0V%2Fl0RH5XEKjH0LTBJ0q4jap91frMas80t%2FJAT5hGdWz19z4%2F2Qpyy6aMjyVlEj2EP6YWm%2Bkhy4bahSyde0aTZZACOZR1tcMgd02puOf%2FuDyP%2FZ7vqvxp%2F6EEr1UYyj0D%2FGMYwPlA5Av%2BjvjI0CbJue5JsxYZ5j76wlxmncGrKnR9%2B1dqdmQWiiKRR1eEj%2FcUcNtjJJWqhPYk%2B%2BbimdyeyoE0oQDLhGI21Ury%2B%2F71pS6tumD%2FVZoD2ZMd6g25ayzlv9O9Lu41i%2FA5DB9ow9ZnVyQY6pgHwp69n8GnEuKEABd8sijKTIUShwA1A28yFQ%2BAD%2B7MLg5%2Bfp%2FOqAjBRaWH6xyU5VH9hLoKllGaysCkjnuwe3sl58fE2D1GwJo7sUVHFVjpQRWkBCTenk4mQ2O9IW6mBwk2Pl9fgSn87XoAJ226S6YOaCP0Gt00guJvrCUi%2BxXCFGcBkrHYGRCGOHKQkVfd2UHAzzhMachIsCucR14If7cPrP%2F9Kk9t4&X-Amz-Signature=72e1cd51642dc17e27608fc509702fd1672d2fe10e671340ca2a923eb8b398df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWRCWNA7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzJIixVGvaqjTGVAzHiOKAYL1F9lL58eyu0xyWztZ5vAiAkDAUwbb0jEXOs09M%2FC%2FzSJQpzCILkZa0gz6N215jlVyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYgXTXS5nAesZ7m3jKtwDgpF9MsLK%2Budsui5zWdKVaWugziDIF%2FJLnzh15mMa%2Bz3CcoGvYAvlw15KCyTdbfb%2FLOuZYi4o37d61Ym%2FJ%2FK3dH%2BxLvCDCuukXr8KHNjdgTqpDQ9Ow%2FBUZBmvlXu90Xxc3bgCwm882BQaQxlDaCgKyr31jGxoZWvCNVQqm5sQ8%2Bx0YxeQZR6%2FeY5SJowVpe1erAroqFiqfArZz2GkJrEpDfKvr76q8XxSYiKMeK7OHodzli9StL67sNKcsEq2XN0Ci6Tgar%2BU4ezUc2xSLHKgKc4Z7DrxAtLrRNMTE5%2Bp7ysjbpksPo1a%2Bmy7bmUgUqu9pPg%2BktWT0fEY51Nb%2FT4pqY2S9%2Fq%2FesXh7i3v9ZuqHb0V%2Fl0RH5XEKjH0LTBJ0q4jap91frMas80t%2FJAT5hGdWz19z4%2F2Qpyy6aMjyVlEj2EP6YWm%2Bkhy4bahSyde0aTZZACOZR1tcMgd02puOf%2FuDyP%2FZ7vqvxp%2F6EEr1UYyj0D%2FGMYwPlA5Av%2BjvjI0CbJue5JsxYZ5j76wlxmncGrKnR9%2B1dqdmQWiiKRR1eEj%2FcUcNtjJJWqhPYk%2B%2BbimdyeyoE0oQDLhGI21Ury%2B%2F71pS6tumD%2FVZoD2ZMd6g25ayzlv9O9Lu41i%2FA5DB9ow9ZnVyQY6pgHwp69n8GnEuKEABd8sijKTIUShwA1A28yFQ%2BAD%2B7MLg5%2Bfp%2FOqAjBRaWH6xyU5VH9hLoKllGaysCkjnuwe3sl58fE2D1GwJo7sUVHFVjpQRWkBCTenk4mQ2O9IW6mBwk2Pl9fgSn87XoAJ226S6YOaCP0Gt00guJvrCUi%2BxXCFGcBkrHYGRCGOHKQkVfd2UHAzzhMachIsCucR14If7cPrP%2F9Kk9t4&X-Amz-Signature=3c5af83593ec3ed4252c0bb6ac2f3ff250b553a1fcdc533d941050a4d6bd3484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

