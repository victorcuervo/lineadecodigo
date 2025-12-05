---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NKEYWUG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T131123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEEXIqjWOy6eEHaomSUXG53da0A%2B9bb1BUqHiXKc6uuAiA6A2XnabDySe8WX5yNegwSms1MpDAtWkMXMsp1R8hD1Sr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMQGk92LqZjCHduiIMKtwDJoVL0hx3idvRH4v6aja31n6JeM2tKzaU4dCXr4xyIHc%2BjSCaQfnkSse%2F0iGfT0%2FnutJa%2FborlnD2O3omQ4T7kOP6coo1vHa0szOc6W%2FSSzE3y15%2F3%2BkI0H%2B7xLZCyD0Sg00oU1sPbsS9XJbM8WdXNiENuKWg1P8q2xTM1reXetN2iWJiw70m%2BzdY5DnR9%2Bz06IPMi2iGNjt2%2BLu%2FSZRMl6wVFkk2Q041EtQpn%2F3vwNLt7k1MYmQsZ%2BOaLLu40RWwynydMxGWR4%2FP%2B8ObQav2zhXe2CsfdsRulX46lh6iKggM4jxEw8GdYR9Idni31x0YaraPj9r%2BGSz%2BnWWCO0nEMjGRpPlEdZyFuM4cvYrBa6JonecRz9YZuwn7F52%2FwtLXU2W%2FusNlXzBqepgeVNLnVQFpR2L8y4FjiBS8AGj6a%2BiYL%2Bjk6tkbJDRz9H2dZaYhXAsXnRYXfnRFd45aruEbeUzgqi0mJ6IcH7RpkehAP%2F0x9ChakUq%2BPngEiD3uvmjVteobK9nFwUffW9MLa5D5WuqRDz%2BQn9%2FjZzNgYLm9Jj1uTC7sq2mXLWPbggwYFMz%2Bo2BMngE6fSGq3FxPiiRuC3C4rvW%2B4RKwZ%2FdKM%2BgxOLEeJjFne0g64jXccSow%2BqfKyQY6pgF9Cg4soy6FyVZIaX8hCXxMSoMWa%2BXVK2C68cp%2BzkzZynQS4WpvPnZlA8w2x4QpXF2ytHLE6Lcq6mYHybyKVhb8zq88mkp5Bpio5MHZCKXLRc%2BcZAH8XY0WpEjYXmvoPs0N5BS%2FFGunCHpbJXx0%2Bdx5r5Y07GLXERYJs%2BLaQqfRyHJ0Mua3rr09zwwB%2B2cKWmFg90zB7u6aIw5qXcRZFxL5m%2FFGMnJl&X-Amz-Signature=a7ba38fbb4aadfdbb57b0e68b433812e3b746300b428757448e98a40d47dc9f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NKEYWUG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T131123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEEXIqjWOy6eEHaomSUXG53da0A%2B9bb1BUqHiXKc6uuAiA6A2XnabDySe8WX5yNegwSms1MpDAtWkMXMsp1R8hD1Sr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMQGk92LqZjCHduiIMKtwDJoVL0hx3idvRH4v6aja31n6JeM2tKzaU4dCXr4xyIHc%2BjSCaQfnkSse%2F0iGfT0%2FnutJa%2FborlnD2O3omQ4T7kOP6coo1vHa0szOc6W%2FSSzE3y15%2F3%2BkI0H%2B7xLZCyD0Sg00oU1sPbsS9XJbM8WdXNiENuKWg1P8q2xTM1reXetN2iWJiw70m%2BzdY5DnR9%2Bz06IPMi2iGNjt2%2BLu%2FSZRMl6wVFkk2Q041EtQpn%2F3vwNLt7k1MYmQsZ%2BOaLLu40RWwynydMxGWR4%2FP%2B8ObQav2zhXe2CsfdsRulX46lh6iKggM4jxEw8GdYR9Idni31x0YaraPj9r%2BGSz%2BnWWCO0nEMjGRpPlEdZyFuM4cvYrBa6JonecRz9YZuwn7F52%2FwtLXU2W%2FusNlXzBqepgeVNLnVQFpR2L8y4FjiBS8AGj6a%2BiYL%2Bjk6tkbJDRz9H2dZaYhXAsXnRYXfnRFd45aruEbeUzgqi0mJ6IcH7RpkehAP%2F0x9ChakUq%2BPngEiD3uvmjVteobK9nFwUffW9MLa5D5WuqRDz%2BQn9%2FjZzNgYLm9Jj1uTC7sq2mXLWPbggwYFMz%2Bo2BMngE6fSGq3FxPiiRuC3C4rvW%2B4RKwZ%2FdKM%2BgxOLEeJjFne0g64jXccSow%2BqfKyQY6pgF9Cg4soy6FyVZIaX8hCXxMSoMWa%2BXVK2C68cp%2BzkzZynQS4WpvPnZlA8w2x4QpXF2ytHLE6Lcq6mYHybyKVhb8zq88mkp5Bpio5MHZCKXLRc%2BcZAH8XY0WpEjYXmvoPs0N5BS%2FFGunCHpbJXx0%2Bdx5r5Y07GLXERYJs%2BLaQqfRyHJ0Mua3rr09zwwB%2B2cKWmFg90zB7u6aIw5qXcRZFxL5m%2FFGMnJl&X-Amz-Signature=fcb85afdb013b5043976685539161cb6de288d6fb8bed2e3f4b9d36e69209a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

