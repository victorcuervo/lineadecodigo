---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPLTDUAR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyQECq4LJARb%2BKFKzTaM4XXOsTLuBK579rNeiK%2BhxOxgIhALi2VH9%2FiJUgzIcRe%2F09zJhc%2FaiE6uacDz4FW74A6jrOKv8DCG0QABoMNjM3NDIzMTgzODA1Igzqu4m2ypYjwTJp89wq3APHVtVyftMH5CYFrGynZN7t9nBYM6KMWQNA96ugMbKi9z1mMS5cuLiCEOC5vLo98SvQkkOiq10b%2Bl8kBHeO8E1rHFv3B4KYhRGI7c8vovw6e%2FBW7dsI8LDmqrPfTGRmJkx8SxvJ2kh1Di45SGi6b%2FAS9NtEi64YZvyTfCHP0V%2BbwH8chbxzYEUTAU7sa%2B9has7dm%2BlQwSIYo9e%2BNUISqglzpy0EapFmrc5t4l9NLBA%2BjRPOyziVNFrABFJpFFoBPrpeG0%2BckIjmExxnwbuLtK14g01C5LyeTAFLjAytbrKqj4T7G18%2FLHIZpAfBNX6QMHFJCznPVZIxTC0XXulg8zbvtZXlj%2FGSrPUU0KOEnIep%2B5akWMfv%2FtPMwG8sawneFym1F3UMgDhgMjbwZgCqIjNGZ01E65omq7oMxFFMr5y0DBXM3qtEwGF%2B2Zwq17lNQ%2FGD%2BALwQM80pW%2F3huqua6l1FBXuV9LrOt5nxBNrD3BvBPbd4rWCdnJD0PYkVR3xieCmCHQuKZebZhWsIrohF7O0OUjzFiJnoj2v6qIGJrUw8uD8%2FTG%2B2BMhY%2BEElVtxOc75rqu4lRT0EmtFfnHX9wDl4Yzo6OY4sV%2BTT%2FuHRn1qDPyc8a4ybCdN4lJDKDCI3c7JBjqkAWSQz4iXTnbHjZD44Q3l25MGJJKCc%2Fyzwza4fBgI6fnOkhuQReFyaZo7EPlpF4qdIa3xb90b03GEyyF5z1hWWobXiwwaKELa5FS%2BTZr0oeWNmlManmRzop9T6boQgU8KF5ngamRuXemb%2FFtiDPnUiyR5huXaYe17Sh%2BnM1tVTLWjlyaWIywnYJyoD130MyIZSPGznlF7020Z2hC%2BLYnxb8QpfzRM&X-Amz-Signature=31e3925aaafad2d936ec1a9dbc3e5ec9f34061c7e25b070242d57b6c59acf12f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPLTDUAR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyQECq4LJARb%2BKFKzTaM4XXOsTLuBK579rNeiK%2BhxOxgIhALi2VH9%2FiJUgzIcRe%2F09zJhc%2FaiE6uacDz4FW74A6jrOKv8DCG0QABoMNjM3NDIzMTgzODA1Igzqu4m2ypYjwTJp89wq3APHVtVyftMH5CYFrGynZN7t9nBYM6KMWQNA96ugMbKi9z1mMS5cuLiCEOC5vLo98SvQkkOiq10b%2Bl8kBHeO8E1rHFv3B4KYhRGI7c8vovw6e%2FBW7dsI8LDmqrPfTGRmJkx8SxvJ2kh1Di45SGi6b%2FAS9NtEi64YZvyTfCHP0V%2BbwH8chbxzYEUTAU7sa%2B9has7dm%2BlQwSIYo9e%2BNUISqglzpy0EapFmrc5t4l9NLBA%2BjRPOyziVNFrABFJpFFoBPrpeG0%2BckIjmExxnwbuLtK14g01C5LyeTAFLjAytbrKqj4T7G18%2FLHIZpAfBNX6QMHFJCznPVZIxTC0XXulg8zbvtZXlj%2FGSrPUU0KOEnIep%2B5akWMfv%2FtPMwG8sawneFym1F3UMgDhgMjbwZgCqIjNGZ01E65omq7oMxFFMr5y0DBXM3qtEwGF%2B2Zwq17lNQ%2FGD%2BALwQM80pW%2F3huqua6l1FBXuV9LrOt5nxBNrD3BvBPbd4rWCdnJD0PYkVR3xieCmCHQuKZebZhWsIrohF7O0OUjzFiJnoj2v6qIGJrUw8uD8%2FTG%2B2BMhY%2BEElVtxOc75rqu4lRT0EmtFfnHX9wDl4Yzo6OY4sV%2BTT%2FuHRn1qDPyc8a4ybCdN4lJDKDCI3c7JBjqkAWSQz4iXTnbHjZD44Q3l25MGJJKCc%2Fyzwza4fBgI6fnOkhuQReFyaZo7EPlpF4qdIa3xb90b03GEyyF5z1hWWobXiwwaKELa5FS%2BTZr0oeWNmlManmRzop9T6boQgU8KF5ngamRuXemb%2FFtiDPnUiyR5huXaYe17Sh%2BnM1tVTLWjlyaWIywnYJyoD130MyIZSPGznlF7020Z2hC%2BLYnxb8QpfzRM&X-Amz-Signature=459ff3b1d54f6a643e7cdb3fc4b1573f2e2773fb67bb89d52206201edebc4e76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

