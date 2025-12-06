---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5L3HXIO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjugV9FXKbe90JgUknt1juV9%2Bb%2B%2BqKicnv%2BGCuLxEskAIgEMprh4ZZ9nzhUSbB4ZbG3pTNK1ocImbzaTrlfgjB8m0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDE3%2FkzlUhrqskVP1FSrcA%2BdNBZaurj0odVHXhqQdxfgfKXu9MJOGKRQVqA7Jqoi%2FD%2BeKFpZ9oDK2KvJJD7%2B3yZjgQhK2aZBrAKDeriZrr9EIYKHw1%2FLEQZIQ2pAW5j2mxBFcA%2BcJ0XFMqfns0ZiTYmsZtPMfDD%2BYKNEkXf8PBRyrmttpKwwg%2Fl%2FV9OWk9OLhgIcClYT6a8%2F2iM2UtmWOafjPPpW8trs5Z6batducHljSVfr5ki%2FbCf%2FFawvDon3W%2ByaLDuZWpKhaJk1j2McHa4sKHMvl2hnvuUr1QMoeDszXDJnW1i1peSaAw8A3BLiGjVGneX6v%2BTki0BIsCOkpxUwvzgXCY%2FNsH3aLi6IXmZQ%2BKD8XvclFW2Y7WmNDJowjlEVUwi1BsJUQmE3y4FB%2BUhVTBEkHEi5uaVeP0QVP5F2dMoGrsBMc2DxGNb6KEwHAdfsdYbF8p8C8j3%2FavmIz0cQO765DXipgRU%2F4TqCdpde1gFX92%2FD%2Bxod1vgw1zD9zyyC3fhg8Y4eScs%2FXaIKUCZ3z2aYb2JdFUGkYZ3XxhEMMo6uqzKrM8%2Fd2R75iaR%2FfbeOnb7JXaVXW%2F35sNTPRSwtj0tacGnwZQ%2BxuhGgMwwJ3X4KPPWthOc3LhE0Pol%2FHfhW%2BBLICEHuBsHDSMOXB0ckGOqUBn5b81ULcLpb3OzjbrljrT%2FOz%2FgguBa7NvvU%2FEEpFaxurnGbCnLljpCyCdVukhAjTeBZ8FOKG6%2FE3zXMhuB%2FR7r%2FMwJ368tWTyi%2FFXnS35LiP2YKhH5KmBdoo3w8qCzfXR0K%2BH8kEcmbFU6fNjCR5w5SNK8sq%2FrCtuytExdgZaOh6XMBva%2FJQ31BhYbm%2BJLs2xGzwljouRg1d5XVeR%2FKrgRkJ5HQT&X-Amz-Signature=0b2c338f6a93bc861d78f519d271b1a10a42c87e09925a7ca8ce998782b30be3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5L3HXIO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjugV9FXKbe90JgUknt1juV9%2Bb%2B%2BqKicnv%2BGCuLxEskAIgEMprh4ZZ9nzhUSbB4ZbG3pTNK1ocImbzaTrlfgjB8m0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDE3%2FkzlUhrqskVP1FSrcA%2BdNBZaurj0odVHXhqQdxfgfKXu9MJOGKRQVqA7Jqoi%2FD%2BeKFpZ9oDK2KvJJD7%2B3yZjgQhK2aZBrAKDeriZrr9EIYKHw1%2FLEQZIQ2pAW5j2mxBFcA%2BcJ0XFMqfns0ZiTYmsZtPMfDD%2BYKNEkXf8PBRyrmttpKwwg%2Fl%2FV9OWk9OLhgIcClYT6a8%2F2iM2UtmWOafjPPpW8trs5Z6batducHljSVfr5ki%2FbCf%2FFawvDon3W%2ByaLDuZWpKhaJk1j2McHa4sKHMvl2hnvuUr1QMoeDszXDJnW1i1peSaAw8A3BLiGjVGneX6v%2BTki0BIsCOkpxUwvzgXCY%2FNsH3aLi6IXmZQ%2BKD8XvclFW2Y7WmNDJowjlEVUwi1BsJUQmE3y4FB%2BUhVTBEkHEi5uaVeP0QVP5F2dMoGrsBMc2DxGNb6KEwHAdfsdYbF8p8C8j3%2FavmIz0cQO765DXipgRU%2F4TqCdpde1gFX92%2FD%2Bxod1vgw1zD9zyyC3fhg8Y4eScs%2FXaIKUCZ3z2aYb2JdFUGkYZ3XxhEMMo6uqzKrM8%2Fd2R75iaR%2FfbeOnb7JXaVXW%2F35sNTPRSwtj0tacGnwZQ%2BxuhGgMwwJ3X4KPPWthOc3LhE0Pol%2FHfhW%2BBLICEHuBsHDSMOXB0ckGOqUBn5b81ULcLpb3OzjbrljrT%2FOz%2FgguBa7NvvU%2FEEpFaxurnGbCnLljpCyCdVukhAjTeBZ8FOKG6%2FE3zXMhuB%2FR7r%2FMwJ368tWTyi%2FFXnS35LiP2YKhH5KmBdoo3w8qCzfXR0K%2BH8kEcmbFU6fNjCR5w5SNK8sq%2FrCtuytExdgZaOh6XMBva%2FJQ31BhYbm%2BJLs2xGzwljouRg1d5XVeR%2FKrgRkJ5HQT&X-Amz-Signature=0e0eee6adc7215c6b688612291ba3230490ebc4b615f19bba3bfd1d765facaf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

