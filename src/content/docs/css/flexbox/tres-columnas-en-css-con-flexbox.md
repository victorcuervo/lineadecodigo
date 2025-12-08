---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5MBBMVF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqEAC3WltlmMAozWWkJr22CUiLaCg4VCzykZ23eLGOOAIgMPY9MykU9YUZnPLVDEj7ofUKPnMF0gBbrub2OSBY8oYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5wXiZyUVbjcTjDJSrcA0DUV5zAWzQ1C0TD44Fazu6s5DD8epV54BxQyL0IEuRIpYQc4whSdDDXnHtKUHTC8sQeTU1wsZraTpOKvp4Tpggwk9Cw%2Bf4MD0kL6n5cPmBm7%2FCvIX3AJLviJ0mMZtCfGHZI1OJ0cI4ih1m%2BBK%2FuDhxp4g%2Fq96gfEx52MuTlNv0ahwTFiM6RpUmwW5bUVW553utrI6kK6I86tdjhvp0nNol4FJG5X7KqQZ0mh%2Fu73RwsRn7wLDXio7nmY2bWGbBQva06nhkXuJJ5HVszz%2BBizdCrlmpe30iMIFmUueJ1qiRZXtR%2BviTDBNtBUQUYMHDvbwgml9dqDnULyA0N4P1%2FCDYgyy7Kmin1BYN6zJxmwgVCxaAsNWWZr0rnZ7UbWPg7usxVPn0OqKqovVkRQRMWM%2BeIm9HHhoBq%2B2zgaI8seqTs62G7zfWwpeSyTZGjxpQRR78JW8vBeZW8kDOKjQmvA%2FMGQQvXJHeKI0SvyhOQ7EcmsLjrYuq8R173aSxUN1tGNq4%2BGIj5me96FmDKoAULb3sfIMi1FHymdz53dblcvsEAOP5nYlSoBHuJgpPJS4OUZlOr%2F09xFxChTHFtPMQCgbFIVr8msrm3EzueRrQhvbDapGJ8rKGtjdEIuvQkMIiA3ckGOqUBK7aO0NV6Aj88eVYDY3r1J99KLrMHs%2FzM1mEFDfh95vPlxh%2F1N6XktvG3kJvTcXOACalEdvhZPlsMEN1z0hLQ7SbnAEsqUnGRabVHACiJXC1HZVtM0bNQxNDYMePGiLOyL7cPRgOw%2BZULr27jgnwVVCT%2FaO8Hpv7Vjz8JKUe5YaGjTVPsRlUZY06rOPb1cOpi5Rvteh9ZLlWmlsZdbacuvGE14F%2B4&X-Amz-Signature=e81face3816b4fb82ce9a4d9c63430480ec0df9176cbf10908d08418215f6bd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5MBBMVF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqEAC3WltlmMAozWWkJr22CUiLaCg4VCzykZ23eLGOOAIgMPY9MykU9YUZnPLVDEj7ofUKPnMF0gBbrub2OSBY8oYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5wXiZyUVbjcTjDJSrcA0DUV5zAWzQ1C0TD44Fazu6s5DD8epV54BxQyL0IEuRIpYQc4whSdDDXnHtKUHTC8sQeTU1wsZraTpOKvp4Tpggwk9Cw%2Bf4MD0kL6n5cPmBm7%2FCvIX3AJLviJ0mMZtCfGHZI1OJ0cI4ih1m%2BBK%2FuDhxp4g%2Fq96gfEx52MuTlNv0ahwTFiM6RpUmwW5bUVW553utrI6kK6I86tdjhvp0nNol4FJG5X7KqQZ0mh%2Fu73RwsRn7wLDXio7nmY2bWGbBQva06nhkXuJJ5HVszz%2BBizdCrlmpe30iMIFmUueJ1qiRZXtR%2BviTDBNtBUQUYMHDvbwgml9dqDnULyA0N4P1%2FCDYgyy7Kmin1BYN6zJxmwgVCxaAsNWWZr0rnZ7UbWPg7usxVPn0OqKqovVkRQRMWM%2BeIm9HHhoBq%2B2zgaI8seqTs62G7zfWwpeSyTZGjxpQRR78JW8vBeZW8kDOKjQmvA%2FMGQQvXJHeKI0SvyhOQ7EcmsLjrYuq8R173aSxUN1tGNq4%2BGIj5me96FmDKoAULb3sfIMi1FHymdz53dblcvsEAOP5nYlSoBHuJgpPJS4OUZlOr%2F09xFxChTHFtPMQCgbFIVr8msrm3EzueRrQhvbDapGJ8rKGtjdEIuvQkMIiA3ckGOqUBK7aO0NV6Aj88eVYDY3r1J99KLrMHs%2FzM1mEFDfh95vPlxh%2F1N6XktvG3kJvTcXOACalEdvhZPlsMEN1z0hLQ7SbnAEsqUnGRabVHACiJXC1HZVtM0bNQxNDYMePGiLOyL7cPRgOw%2BZULr27jgnwVVCT%2FaO8Hpv7Vjz8JKUe5YaGjTVPsRlUZY06rOPb1cOpi5Rvteh9ZLlWmlsZdbacuvGE14F%2B4&X-Amz-Signature=7beb9d82704522f7b47496068721feb5be54f74c2a1a06f8db00095945326640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

