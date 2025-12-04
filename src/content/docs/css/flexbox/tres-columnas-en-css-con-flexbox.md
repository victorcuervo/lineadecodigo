---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKPJYEYH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD08sNLHxYUbVQY9JxHzVnwBhk6fOIgI8jaxxnlL89JNAIhAMwON030x%2B51872HPkBh%2FrJlwNetDcIBG4h9hnUtcHEOKv8DCEUQABoMNjM3NDIzMTgzODA1Igy99%2BypAjxIpYPoOngq3APLI95ZevDCAY6WU01aKLp2ObqJIZ3OqN3P5bLoGjO86NtLwFKNfm%2FKHUJmxmbn9N3QfHM33hqMhReDg9JLMRXVsuMVOVBDZTi6SjwobG9O6P2W1rU%2BSPEY%2Fhu2K9Fs9zGXqvENcS8n%2FziCkO17pJbZ3IIpiBvDnwnY3vzm3mU%2BOXWtoe%2FILsu%2FLsGIBHAbbY0K3OqHEHpGiU0e8vigv6ySF3ARDmUueTJTPnb6VAcaVU%2FdIrOeW5nTbrDqf%2FY2C0jF3xMsj4uLVOikriP8PFfRpzec7PCGxklDwpR3fLSB%2FWcQ4wfBEBhWPFXmMdIeZMAcAzyDopNaowYC0Deu73u4hmZ6x88JPZOCoe0559NYFdebGinQn3QNzvOpcjtEfmz4VGFKgBF4YxCCSGOm1dOg6D7BjYsH6qZ7uOgpup%2FsYn310kMYA4rKDh4nyy4g2g3rds7Lb%2FUK5kYlyYRxMXGaZ10O6VTV%2FTr46hfDlLaHYu9%2Boyei3XHfsHM4l3G1STKJ0F0EhkWmYhY59yym062lanECP3lxnemj9hSZ0C0OFhZl9itSlchucHdt3czBnnQXXVtcXWXNlteY%2BO4%2BSK3NDaQ%2B88X2aTRrxTLeKHQ0k4rHXoUDBZUl%2BM3lejDE5sXJBjqkAfTqEcMcGRvTlhmpmvE5yDUkgb5fQyEHBYv2msmuB%2B%2FId5%2FvKH2fx3C2wdnW2Md0DcvaRb2oE%2BcoGkulvGF5HJv%2FsAhGTNGpOlI82Kj4qCU8UNnAF75ROgPlNx7KIfiGblS67oIdZZ89LBnh5uOAO1nA9RGINvAlHJoC6ZRLpUjx5C6ajTmmG6hDL3HwcYX5Wa3i3s%2BEcAzbYQnGYJmvc0Hj%2F%2FzI&X-Amz-Signature=f6d5f5aef1f240ed0cb074185d61d757b9eb31b6a3cada0554d1b2b148a3201c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKPJYEYH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD08sNLHxYUbVQY9JxHzVnwBhk6fOIgI8jaxxnlL89JNAIhAMwON030x%2B51872HPkBh%2FrJlwNetDcIBG4h9hnUtcHEOKv8DCEUQABoMNjM3NDIzMTgzODA1Igy99%2BypAjxIpYPoOngq3APLI95ZevDCAY6WU01aKLp2ObqJIZ3OqN3P5bLoGjO86NtLwFKNfm%2FKHUJmxmbn9N3QfHM33hqMhReDg9JLMRXVsuMVOVBDZTi6SjwobG9O6P2W1rU%2BSPEY%2Fhu2K9Fs9zGXqvENcS8n%2FziCkO17pJbZ3IIpiBvDnwnY3vzm3mU%2BOXWtoe%2FILsu%2FLsGIBHAbbY0K3OqHEHpGiU0e8vigv6ySF3ARDmUueTJTPnb6VAcaVU%2FdIrOeW5nTbrDqf%2FY2C0jF3xMsj4uLVOikriP8PFfRpzec7PCGxklDwpR3fLSB%2FWcQ4wfBEBhWPFXmMdIeZMAcAzyDopNaowYC0Deu73u4hmZ6x88JPZOCoe0559NYFdebGinQn3QNzvOpcjtEfmz4VGFKgBF4YxCCSGOm1dOg6D7BjYsH6qZ7uOgpup%2FsYn310kMYA4rKDh4nyy4g2g3rds7Lb%2FUK5kYlyYRxMXGaZ10O6VTV%2FTr46hfDlLaHYu9%2Boyei3XHfsHM4l3G1STKJ0F0EhkWmYhY59yym062lanECP3lxnemj9hSZ0C0OFhZl9itSlchucHdt3czBnnQXXVtcXWXNlteY%2BO4%2BSK3NDaQ%2B88X2aTRrxTLeKHQ0k4rHXoUDBZUl%2BM3lejDE5sXJBjqkAfTqEcMcGRvTlhmpmvE5yDUkgb5fQyEHBYv2msmuB%2B%2FId5%2FvKH2fx3C2wdnW2Md0DcvaRb2oE%2BcoGkulvGF5HJv%2FsAhGTNGpOlI82Kj4qCU8UNnAF75ROgPlNx7KIfiGblS67oIdZZ89LBnh5uOAO1nA9RGINvAlHJoC6ZRLpUjx5C6ajTmmG6hDL3HwcYX5Wa3i3s%2BEcAzbYQnGYJmvc0Hj%2F%2FzI&X-Amz-Signature=a10ed9246416b4f3d134dee03a429b28926b16f0511a2b34bee8046fba136d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

