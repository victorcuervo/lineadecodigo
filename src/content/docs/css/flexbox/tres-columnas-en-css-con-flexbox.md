---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ONLSQPC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T233252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNIEulOUFgqeIWWCdS6sb8p9vlemiWs122KYH4YpAMfAiAr5w8QLlB7tGkad%2B7nE6crFa6nLLb8FlZksyR%2BXj8xySr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMZEUXhOi4gMHo1eZlKtwDt4Hs%2F4o1jtZmH6e%2FU8k2MK2qfNNNjP0Pn0FNCCoxzEqIUAO4MUzw%2Fgno3QUmZTUZdmwuRcr3SOzjS30rgLUZp4NaRehLQRBY7vKe4escyKTUynOPhWuKVga5f67NLGIuVjiGGZv9QZh%2FLT9Fh99aPve%2BlCIn%2FNBIOFf%2FZVEXAzXTDaqSuW5ld%2FRICHIuc3IdtJzsC2emu%2BQmP1miyGJMjnfGOqOC68fWrbRyamnXCu11DfZVSXpq1dFam%2Byea%2Flw31NvKYkcV7R5YKpWFOAn4PtalKP1IdYqEO7IpTS5%2B%2FgGhq91gO9VVIbGDS51g1%2FKJxlHMz5g3F0%2BU2dLbts9EfvAVQUmnludws59j9gQDiD%2BgdxNzXobcZkj6gKXpLZVPlr5TjMPKcDtCjRtCF7adfh5SPR3IVxScIsNtAr%2B3miCBnq%2Fk2b4kxAzei%2FWHEPC%2BRG0PWB6fWc1n4eegNnbQ8As0s8b%2B1Afu4zIHgdd0%2BOs3f5aqiU5G1TJw5WeIz5kA6qvbUVSYQZJPtqWv6qX7FnKDPAjFcroSOLN3ADqeXK35K%2BV5W89bGgjix3ynQ990kpQX5w%2BdZ7WR%2FB%2BZJ7TqjibHzzi7V3NmzGgnY7v9FO4nuGfEX1AjXJAkO0w1MbNyQY6pgEHY4kAQZerJVZAUtO5qiDECaRO1Pneg0W8NqHvZf3C6Vh%2F56eh4%2FV71ZajlDi2DRK0Pc0vxZK40m49sOsE6bOTLgK0IRnMiOOgKvY%2BYa9Tu2Xv8mw6de6WdA1P2Ja%2BMWs7u7ipy6jfQ9j1OnXt5yaUHbETOkXJL%2Fw3C5%2FSv4J8LMCsurY7xgsJ5cFr9g7ezUqd3CfxkYyFmOaBSS1NrovevwkoNWAU&X-Amz-Signature=5cc8c843891745ddc5c29ccac0f53a2523c3ad80c0431e5181af695163f14f6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ONLSQPC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T233252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNIEulOUFgqeIWWCdS6sb8p9vlemiWs122KYH4YpAMfAiAr5w8QLlB7tGkad%2B7nE6crFa6nLLb8FlZksyR%2BXj8xySr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMZEUXhOi4gMHo1eZlKtwDt4Hs%2F4o1jtZmH6e%2FU8k2MK2qfNNNjP0Pn0FNCCoxzEqIUAO4MUzw%2Fgno3QUmZTUZdmwuRcr3SOzjS30rgLUZp4NaRehLQRBY7vKe4escyKTUynOPhWuKVga5f67NLGIuVjiGGZv9QZh%2FLT9Fh99aPve%2BlCIn%2FNBIOFf%2FZVEXAzXTDaqSuW5ld%2FRICHIuc3IdtJzsC2emu%2BQmP1miyGJMjnfGOqOC68fWrbRyamnXCu11DfZVSXpq1dFam%2Byea%2Flw31NvKYkcV7R5YKpWFOAn4PtalKP1IdYqEO7IpTS5%2B%2FgGhq91gO9VVIbGDS51g1%2FKJxlHMz5g3F0%2BU2dLbts9EfvAVQUmnludws59j9gQDiD%2BgdxNzXobcZkj6gKXpLZVPlr5TjMPKcDtCjRtCF7adfh5SPR3IVxScIsNtAr%2B3miCBnq%2Fk2b4kxAzei%2FWHEPC%2BRG0PWB6fWc1n4eegNnbQ8As0s8b%2B1Afu4zIHgdd0%2BOs3f5aqiU5G1TJw5WeIz5kA6qvbUVSYQZJPtqWv6qX7FnKDPAjFcroSOLN3ADqeXK35K%2BV5W89bGgjix3ynQ990kpQX5w%2BdZ7WR%2FB%2BZJ7TqjibHzzi7V3NmzGgnY7v9FO4nuGfEX1AjXJAkO0w1MbNyQY6pgEHY4kAQZerJVZAUtO5qiDECaRO1Pneg0W8NqHvZf3C6Vh%2F56eh4%2FV71ZajlDi2DRK0Pc0vxZK40m49sOsE6bOTLgK0IRnMiOOgKvY%2BYa9Tu2Xv8mw6de6WdA1P2Ja%2BMWs7u7ipy6jfQ9j1OnXt5yaUHbETOkXJL%2Fw3C5%2FSv4J8LMCsurY7xgsJ5cFr9g7ezUqd3CfxkYyFmOaBSS1NrovevwkoNWAU&X-Amz-Signature=46f59a2bf90a9d591c51eb1913589b512c04138a86a8438ca4e8e402fc3e0669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

