---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633LTKHSD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFB2wIwA4Gm95AfNj6vyxOBwLexJ361JvXzlAHhFi30HAiEA9kb4VyhZjqrunTFgF77BPkelwj8hlHZoqUL%2BtYSNpCUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDBborWqrwnI%2F4%2BRyrcA%2FEVKCIYxfEPpVpscJBKhgTFhLl7e7rjTxoEtkk3hmdSTjXnnfilC%2BIJQbTtAjlMM3dSSOE%2Brs454GxcOwCVYb6CpgXPT1%2BzEZeFlzeSuqQyQ7RHzM24wXIQz4GiwMEs14lMTTxvrS6CP9sYWs6NBgODnLqQYNU5DWcNzypKLTh0CRGWWescM9CcJ2Kz0Bmw7rY380StKhKDq7FUM7PorZ1fOQPFA4D1Cy2fd0SUs3oG1furmZXw8eWvKx99GuzZGSF88%2BfMtvGTZt8ScwRxU%2FXsmUFbtTSIt61E6mM0%2FAPDSa4rkvM5W%2BUWKI3LyQDgGIMdXoG%2FZ%2FXi5gJbnyzJ1bGYTKyuoUci33Oq4RJqOVH5HV6qsM1Z0oKFBKGKiTjg%2FK0ZaqYbvKxh79eTA2xVAlusZiUPTCskDvFTm4ogHQ%2BITt78srFAuXdBSknGjeqYSIOzFW8mINtmtRPtkX5y2qC6hvCVtU07oUJ%2Bk419FddKRC310babWKLsZouYuv169nu4PrxK%2BT2tomnai2kero%2B2wK3omz8RcFuOsLEqC5OQtEHp1jKhYuPfW4iBry%2F89qLQjLn0LLkJkgRkVSfDpkZ1s7jjigW0rA8arX5UfByz3jlmpTehECp7JpRlMNvH18kGOqUBh5UPmnRbqK2MZon4aKwxAQ%2BLXr65arCto0D7uMU7WaojBQgK%2BdIrGmUP72c9Ha7ShDQLiSu8JvLGG%2B4E3zbe9sQUt8e%2BvfXvZfnxjeVvKZVlHRp1O7narVEDXEeNILv2bmLMzHntTKh%2Ffz2YUqie5KOleeQuCIui3PjFkYeBM8EpTRAVtA3kb1HOc5dX%2FsGjkv9iv%2FJ%2FqXphgsjFoz5J110hTQxd&X-Amz-Signature=b82524b8915432ede406c1c50148464d7fe15a5d207485a1b53edb00b9499a29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633LTKHSD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFB2wIwA4Gm95AfNj6vyxOBwLexJ361JvXzlAHhFi30HAiEA9kb4VyhZjqrunTFgF77BPkelwj8hlHZoqUL%2BtYSNpCUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDBborWqrwnI%2F4%2BRyrcA%2FEVKCIYxfEPpVpscJBKhgTFhLl7e7rjTxoEtkk3hmdSTjXnnfilC%2BIJQbTtAjlMM3dSSOE%2Brs454GxcOwCVYb6CpgXPT1%2BzEZeFlzeSuqQyQ7RHzM24wXIQz4GiwMEs14lMTTxvrS6CP9sYWs6NBgODnLqQYNU5DWcNzypKLTh0CRGWWescM9CcJ2Kz0Bmw7rY380StKhKDq7FUM7PorZ1fOQPFA4D1Cy2fd0SUs3oG1furmZXw8eWvKx99GuzZGSF88%2BfMtvGTZt8ScwRxU%2FXsmUFbtTSIt61E6mM0%2FAPDSa4rkvM5W%2BUWKI3LyQDgGIMdXoG%2FZ%2FXi5gJbnyzJ1bGYTKyuoUci33Oq4RJqOVH5HV6qsM1Z0oKFBKGKiTjg%2FK0ZaqYbvKxh79eTA2xVAlusZiUPTCskDvFTm4ogHQ%2BITt78srFAuXdBSknGjeqYSIOzFW8mINtmtRPtkX5y2qC6hvCVtU07oUJ%2Bk419FddKRC310babWKLsZouYuv169nu4PrxK%2BT2tomnai2kero%2B2wK3omz8RcFuOsLEqC5OQtEHp1jKhYuPfW4iBry%2F89qLQjLn0LLkJkgRkVSfDpkZ1s7jjigW0rA8arX5UfByz3jlmpTehECp7JpRlMNvH18kGOqUBh5UPmnRbqK2MZon4aKwxAQ%2BLXr65arCto0D7uMU7WaojBQgK%2BdIrGmUP72c9Ha7ShDQLiSu8JvLGG%2B4E3zbe9sQUt8e%2BvfXvZfnxjeVvKZVlHRp1O7narVEDXEeNILv2bmLMzHntTKh%2Ffz2YUqie5KOleeQuCIui3PjFkYeBM8EpTRAVtA3kb1HOc5dX%2FsGjkv9iv%2FJ%2FqXphgsjFoz5J110hTQxd&X-Amz-Signature=3fe3347c0ca287d90dc2d1f22dced93ea5a5deeeace61d9072d9db09ae629fdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

