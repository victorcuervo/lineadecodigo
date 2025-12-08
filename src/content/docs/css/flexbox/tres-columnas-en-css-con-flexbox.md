---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VASPRX44%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF97l%2B3K72NHVVUjQXCzWopPJguBZi2jCmcOCd0nFHuWAiBnbLz2kziINnLW%2BInIYJY4k5wcwf1FDQceJ6Ifc%2BcYTCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrpt6J57EvgZq3eBcKtwDrcQYgGMO1C95MUSSWmJU%2F0NSpg33G5LnG4uoWf5SHRxNsqrdiwme5%2B6jsX9fvAF9J%2BfZCeoBzP01RzFa62P28bq%2FO4prs8e3y1gTX%2BRO%2FmVLAw02IIxHnzGiHVZUVVAwYX6fbXhahsKkHDoB%2FzlDvuwjNKbogIWwZmlwhAE27Io7QQluYrCYHRfFZuG%2FYBMf%2BvERDjFDh3ivffdrDbcCBJL7su%2FNqhlcAGeIXrNcF%2FZsyexb91y5l3BJVtzGcIVl%2Fsp0IgbEru3iSCTNXG2ZaE9%2Fif0Z55vxJpuolFaouvLNSj53PxRvEHkfEYGYyutpWzXhRw7zjO1%2FFEmL5kCltR3gzvL7wH6jKD%2BgWYzdurfOJRH1M8RW9QWQo7Zu2VFJaI4gUaBwAYotNe7GN6MvG58DqTBj5Q3OruQ%2BdDwpDEcG6jtfG10ElTjHZSTc5IwTdUMqwHSZvLjBLyuXDyIr45yPm4gyZaPupxxwp9xIdJAWNkYFleGAP%2FJjbbge%2BnkJ0hnUkMyQxCmItEX8I%2BNZzzbANGMRQAWgyZE%2F%2B2oCZLYqujIQo1SvQumC8TpEG3hzBE6rLKKQ%2BOQkC%2B0QZf%2BdFMcCg%2BakYaOoCis9mUwp1WoZlwTNoxFB6tX0QmwwubTcyQY6pgHmi4AOoO5TqQwpa37%2FtTnQvr5kLv%2FG6QoqdYqB%2FXs8QQh5gQiWfzBxbTMVbFo4xBrTZXBkUSQUAbCCDI2LxuipjysWlaZR4fi8UIgIlnvKuf1UpEouqdcUQn8%2Bid6LqHDXkM6XNptm5QwF6Wd3lpGZzSdrjw9OSgErt4CB4fTzeddlszDNeCo%2BNxDqpO7cG337z4EXsel5g2pgGQdOd9xDqAel%2Bt%2B5&X-Amz-Signature=6b61e558020394fb1da1facdbdcc299e4d1c00ba53aa80aad3b0ed81a2400eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VASPRX44%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF97l%2B3K72NHVVUjQXCzWopPJguBZi2jCmcOCd0nFHuWAiBnbLz2kziINnLW%2BInIYJY4k5wcwf1FDQceJ6Ifc%2BcYTCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrpt6J57EvgZq3eBcKtwDrcQYgGMO1C95MUSSWmJU%2F0NSpg33G5LnG4uoWf5SHRxNsqrdiwme5%2B6jsX9fvAF9J%2BfZCeoBzP01RzFa62P28bq%2FO4prs8e3y1gTX%2BRO%2FmVLAw02IIxHnzGiHVZUVVAwYX6fbXhahsKkHDoB%2FzlDvuwjNKbogIWwZmlwhAE27Io7QQluYrCYHRfFZuG%2FYBMf%2BvERDjFDh3ivffdrDbcCBJL7su%2FNqhlcAGeIXrNcF%2FZsyexb91y5l3BJVtzGcIVl%2Fsp0IgbEru3iSCTNXG2ZaE9%2Fif0Z55vxJpuolFaouvLNSj53PxRvEHkfEYGYyutpWzXhRw7zjO1%2FFEmL5kCltR3gzvL7wH6jKD%2BgWYzdurfOJRH1M8RW9QWQo7Zu2VFJaI4gUaBwAYotNe7GN6MvG58DqTBj5Q3OruQ%2BdDwpDEcG6jtfG10ElTjHZSTc5IwTdUMqwHSZvLjBLyuXDyIr45yPm4gyZaPupxxwp9xIdJAWNkYFleGAP%2FJjbbge%2BnkJ0hnUkMyQxCmItEX8I%2BNZzzbANGMRQAWgyZE%2F%2B2oCZLYqujIQo1SvQumC8TpEG3hzBE6rLKKQ%2BOQkC%2B0QZf%2BdFMcCg%2BakYaOoCis9mUwp1WoZlwTNoxFB6tX0QmwwubTcyQY6pgHmi4AOoO5TqQwpa37%2FtTnQvr5kLv%2FG6QoqdYqB%2FXs8QQh5gQiWfzBxbTMVbFo4xBrTZXBkUSQUAbCCDI2LxuipjysWlaZR4fi8UIgIlnvKuf1UpEouqdcUQn8%2Bid6LqHDXkM6XNptm5QwF6Wd3lpGZzSdrjw9OSgErt4CB4fTzeddlszDNeCo%2BNxDqpO7cG337z4EXsel5g2pgGQdOd9xDqAel%2Bt%2B5&X-Amz-Signature=e5d9180f8c1a700b8dfe77f96b0984c366c16a76052222909e4ed06d8005d44c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

