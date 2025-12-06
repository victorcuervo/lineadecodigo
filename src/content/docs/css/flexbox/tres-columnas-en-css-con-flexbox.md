---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UYEFLWX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwYpeEbRDQWvTaesTnKVfbJ%2B9qViHoK7ZHHG2kdXnZBAiEAzJBWUut7uY3SMUbXmfhEj5Ta%2BJq6MLXyINQhLGCHweMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEFOc1UKsnb0y%2F%2B6VyrcA2cSHCLWkv6OPl%2Fyuwj5ht7QZUGyIxCVo%2BI0eIVvjXbp7EcRfk2Q9j3lmWOL6NsxR35lLl%2BrQI77rc6CtMhBzJUTBZxYGtQmC%2FJbg6LB8A6%2FtKtHApSc2W2LETRopnY2xwgPuj2UtmZ4mgdGtruzwXThdnIrN9wnb%2Fpt5n1ULbEPmhwDAAZaR%2FQmS1hFg%2F%2FTmmvETPCrfXPJMgvyIVcbk7tN9t%2Fc8NVmQyIfbDFqnIfUl0%2FVtQ3pBo%2Bt%2FZw9GG2arrJm7EeSSFsYGCtJgzMFEKDUIKKMAV9LB%2FrkuysJMiGciam3kWxznj8%2FtvvS3W%2FM5kxyhgY3YoxNmGhgO3bX5%2BL%2FowSAXc12jw4sog%2F5isDb2V1qSxEBEiELMjlAPymcXmXB1UQwoAZI5tK7moAbJplga2ZakxmJDT0%2Fr5EXllyjBTdhZZsToi0EzCoxlLd%2BPti92OyTXOJipWJ4c%2Bt%2FM%2Fv6HiXyWMWLq%2B6BvqrFcJsoKZC8iltgk7rjkctK%2BWzz4mI8%2FIh%2FUUQ23C7ddgzgh%2FgVfzCWWvKN9007t198OMworF%2BPF1XtiZppNpEqYykIxJnmW%2Fhn8tnzd2%2BvUqmEPWqufuIxdBj%2Bnq6TE3ZoHwdqJWgNNF8YSfyI%2BtS2MKGm0MkGOqUBP5KqI2DmDIA8nzeaqfWlTsCR2fpKUxy3I%2FZWhrH5VtqfNxv9azGHSTMKJ7k8C5Mz2f%2Fuwm8hsnY3z75aIoonWUs5kT%2B5kXe8EoOsMH8AbrK4ckrnCiIPv3LJXD1X3eMiStnZgZyJXHcHajLRIElVxDWdiJ3HLnaKUtD9ocWCxIx60emG2bQDq5WYWxTnwyYnhVclyEnnxUjnquNpIEiBnWCZVoXk&X-Amz-Signature=b842075b222fb3dec42151d6a8992dbd9debaeab51cffe8f4e9de1d55b522d3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UYEFLWX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwYpeEbRDQWvTaesTnKVfbJ%2B9qViHoK7ZHHG2kdXnZBAiEAzJBWUut7uY3SMUbXmfhEj5Ta%2BJq6MLXyINQhLGCHweMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEFOc1UKsnb0y%2F%2B6VyrcA2cSHCLWkv6OPl%2Fyuwj5ht7QZUGyIxCVo%2BI0eIVvjXbp7EcRfk2Q9j3lmWOL6NsxR35lLl%2BrQI77rc6CtMhBzJUTBZxYGtQmC%2FJbg6LB8A6%2FtKtHApSc2W2LETRopnY2xwgPuj2UtmZ4mgdGtruzwXThdnIrN9wnb%2Fpt5n1ULbEPmhwDAAZaR%2FQmS1hFg%2F%2FTmmvETPCrfXPJMgvyIVcbk7tN9t%2Fc8NVmQyIfbDFqnIfUl0%2FVtQ3pBo%2Bt%2FZw9GG2arrJm7EeSSFsYGCtJgzMFEKDUIKKMAV9LB%2FrkuysJMiGciam3kWxznj8%2FtvvS3W%2FM5kxyhgY3YoxNmGhgO3bX5%2BL%2FowSAXc12jw4sog%2F5isDb2V1qSxEBEiELMjlAPymcXmXB1UQwoAZI5tK7moAbJplga2ZakxmJDT0%2Fr5EXllyjBTdhZZsToi0EzCoxlLd%2BPti92OyTXOJipWJ4c%2Bt%2FM%2Fv6HiXyWMWLq%2B6BvqrFcJsoKZC8iltgk7rjkctK%2BWzz4mI8%2FIh%2FUUQ23C7ddgzgh%2FgVfzCWWvKN9007t198OMworF%2BPF1XtiZppNpEqYykIxJnmW%2Fhn8tnzd2%2BvUqmEPWqufuIxdBj%2Bnq6TE3ZoHwdqJWgNNF8YSfyI%2BtS2MKGm0MkGOqUBP5KqI2DmDIA8nzeaqfWlTsCR2fpKUxy3I%2FZWhrH5VtqfNxv9azGHSTMKJ7k8C5Mz2f%2Fuwm8hsnY3z75aIoonWUs5kT%2B5kXe8EoOsMH8AbrK4ckrnCiIPv3LJXD1X3eMiStnZgZyJXHcHajLRIElVxDWdiJ3HLnaKUtD9ocWCxIx60emG2bQDq5WYWxTnwyYnhVclyEnnxUjnquNpIEiBnWCZVoXk&X-Amz-Signature=5ba79972029ca796828f7444a6f3bc81a9581fb9c4de5c194b0d219341e2df75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

