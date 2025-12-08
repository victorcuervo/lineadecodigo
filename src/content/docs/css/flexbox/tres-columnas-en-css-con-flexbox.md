---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDN3GWHE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYC%2Bd16X%2BLr9i4jQyn%2FiD3e2gCiBvibM9gq9gQ%2FfBK5QIgSvSSbdsdNHFcwu4o9Mrp5JQgFHliFOIckKGVvlAFoKYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQjLVDzsRSNg7kEkyrcA6TsJLlGJ7H67i6y4sdB4gFSwsgEy0DGmYhbb4kZwB%2Fn9LllTXzcAhTjgGfnywcIEQcq9GwVaw%2BwlqZ40DuS2x84bVl5O76JLtaqFhmNcWLN1YFf06VMj0%2BhnsMvvZnHJCP9%2FVpra86LMyvxZ%2BUBPnHYHzMggJi0nWlj3A7G%2Fwqwd5OdAG2xwULWYmnJKrPIV27Fjet%2BuQ7C88WbtUOfqzLbou7KIpN01VIn%2Br6tMFVTeHUqAS0ydv%2FwFcfg6yCesoJqGLYV4RjQUUuU6FuvLPrtl7CSO8CluA3KNz1EeCCXuEKf77vRMkY%2Bud1MhmTtW8aczsBagNLTiUt93EFAAuLUalK88ilDj1mE%2FWUfp2uFXu%2Bvb3o03dxXF%2BMz4XrMWrBP5Un8NLPkT0QfE1c3%2BsOAAPOMMLbmQVPFa7NuppC5vK1J7ZDF8RUkwu4MsBQ%2FacbnWYTr9J9pV8zo0%2BPbuHce6PpfwGjo3XJhp2OuGhsLP0YALPWpr4QNhsbWsDD5mm32ySTfAHZiX%2F2JrFt%2FLxbK6ijWhwqS7duBT%2Bz%2B8fxhMgXkop76pqTfMMjef02BMlfW8D%2B2PRvYjD7IVYQPCi2dlHSEfA8brspT5j0RKL%2FIs%2FbC0885om%2FKafO7MNWA3ckGOqUBKYf6B3miM9%2Basixg%2BF1YrTgWTFDosYKZxApG3ar6XpP%2Bphq08fvxno8U1ppfHt%2FE2l8GOcUynx8mGEKytdge4S7o%2FuQniHFAPu10ucF8neSJoottxHnIFve4jn4uFh%2FUWMpdA5IkeAQ28lOt23CUVSLUjVfoUW6jySUoTQjgpvZwS0jsFRg1i3Y0xDvhyixtfnXrcfMtSkoxVhLngIOhYENFlXzv&X-Amz-Signature=530d67f521ede10df852aceaea3709cc3f02bc2dd467e58cbcb81c1e8c00ce28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDN3GWHE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYC%2Bd16X%2BLr9i4jQyn%2FiD3e2gCiBvibM9gq9gQ%2FfBK5QIgSvSSbdsdNHFcwu4o9Mrp5JQgFHliFOIckKGVvlAFoKYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQjLVDzsRSNg7kEkyrcA6TsJLlGJ7H67i6y4sdB4gFSwsgEy0DGmYhbb4kZwB%2Fn9LllTXzcAhTjgGfnywcIEQcq9GwVaw%2BwlqZ40DuS2x84bVl5O76JLtaqFhmNcWLN1YFf06VMj0%2BhnsMvvZnHJCP9%2FVpra86LMyvxZ%2BUBPnHYHzMggJi0nWlj3A7G%2Fwqwd5OdAG2xwULWYmnJKrPIV27Fjet%2BuQ7C88WbtUOfqzLbou7KIpN01VIn%2Br6tMFVTeHUqAS0ydv%2FwFcfg6yCesoJqGLYV4RjQUUuU6FuvLPrtl7CSO8CluA3KNz1EeCCXuEKf77vRMkY%2Bud1MhmTtW8aczsBagNLTiUt93EFAAuLUalK88ilDj1mE%2FWUfp2uFXu%2Bvb3o03dxXF%2BMz4XrMWrBP5Un8NLPkT0QfE1c3%2BsOAAPOMMLbmQVPFa7NuppC5vK1J7ZDF8RUkwu4MsBQ%2FacbnWYTr9J9pV8zo0%2BPbuHce6PpfwGjo3XJhp2OuGhsLP0YALPWpr4QNhsbWsDD5mm32ySTfAHZiX%2F2JrFt%2FLxbK6ijWhwqS7duBT%2Bz%2B8fxhMgXkop76pqTfMMjef02BMlfW8D%2B2PRvYjD7IVYQPCi2dlHSEfA8brspT5j0RKL%2FIs%2FbC0885om%2FKafO7MNWA3ckGOqUBKYf6B3miM9%2Basixg%2BF1YrTgWTFDosYKZxApG3ar6XpP%2Bphq08fvxno8U1ppfHt%2FE2l8GOcUynx8mGEKytdge4S7o%2FuQniHFAPu10ucF8neSJoottxHnIFve4jn4uFh%2FUWMpdA5IkeAQ28lOt23CUVSLUjVfoUW6jySUoTQjgpvZwS0jsFRg1i3Y0xDvhyixtfnXrcfMtSkoxVhLngIOhYENFlXzv&X-Amz-Signature=c68120d652338cd34ea3ecf8c23e979190357fc0244a6385c5ab87ae02063189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

