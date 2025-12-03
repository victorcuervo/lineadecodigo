---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CDUME5A%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCtT8xXYwm1v5WjTOWVqE5RmvFBB64x8Iv3dFMelBxb5gIgXFrJDukclgsI2Hs8DX7yci8NbrgcOlTrIVc10FkbUF4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDC12nKXHeFbhid5ScyrcA%2FOqvJS0JhVAzQ5zRlP0Jt0ivclFT4NAUZfUTaav2e12X%2BXUJ0sRcNilB5fc5bTWYO0LESvBXya0a0e7czZNw9qUS47YYUHnJfdM6tS%2BbtZHqtzrKJX5zypPSo38l5rFpRmonrQaC%2BRBSfgc3Wn56EbQ%2FSoak2nvZappyvlVhLOHuqCv783BiHO9XRjD%2BZ0YD9bc9RR9VPs5hPjSGo2t2AhuQW2QKC61fADtd6s3i%2Fa3vm0MnL9OqCWzBHjYmQXzk4plVQdkoqzOS%2FLt4rL9iVkkochp%2FLs3PZ%2FHP3Qx%2FtLTPTjoLpKrm270mqB09Qqcrhnte1Ee%2B%2FhFU28ycf8R6fd1jv7%2FhQxLQbxG%2BeBrGXClNgimRzNrBi5pXKlDq9QDN09pftIoQ2GoFObgaPXC0%2F%2Fc17Zcqvhox1ETmYEGO%2FX9wgcrlOJg3xpxiIyJhEysua8Gowwj8q5xC0P5KtjdzsvnHJtxzBECZgkiurODJ98ipVIhjT8GnN3fKeWWHMYf5Vxdy4VmJ1HhUMrw5JwFUI9gNQWJCQsyEHbGHN6PIZkortHmdInWDg5wZ5f3NSXfBJHnyJ2vY4NbaV6G90ATXI1YWlxPl1LdQd51fH%2BLs4Tql9m0NSLBg7C6K4vUMJeHwckGOqUBgpNBmitAyl79ek4AZcED6EtrAHdLftvgI1DNOWOo%2BhTaT9C%2F4R6QbjsUiP%2BoOhm2%2FnAhB5lYQ2wbEkYJJHwRGcboJ8yiAl8ovAchrTcM8hEs4Mz1vni2QKdgXmZVcMnKWq7SvCwolYvuawlmh9%2BcMoxyaALea9Jhm3Z6%2B83pK7ksiOofnfuqLnmNv3%2FwIS%2BFOdeBl8ApO60TW7k5KTG7akvCdCeV&X-Amz-Signature=af45726a5c0e97b9ebfc2e996691e3873b6fddc86fbb361259424da12d2c911b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CDUME5A%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCtT8xXYwm1v5WjTOWVqE5RmvFBB64x8Iv3dFMelBxb5gIgXFrJDukclgsI2Hs8DX7yci8NbrgcOlTrIVc10FkbUF4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDC12nKXHeFbhid5ScyrcA%2FOqvJS0JhVAzQ5zRlP0Jt0ivclFT4NAUZfUTaav2e12X%2BXUJ0sRcNilB5fc5bTWYO0LESvBXya0a0e7czZNw9qUS47YYUHnJfdM6tS%2BbtZHqtzrKJX5zypPSo38l5rFpRmonrQaC%2BRBSfgc3Wn56EbQ%2FSoak2nvZappyvlVhLOHuqCv783BiHO9XRjD%2BZ0YD9bc9RR9VPs5hPjSGo2t2AhuQW2QKC61fADtd6s3i%2Fa3vm0MnL9OqCWzBHjYmQXzk4plVQdkoqzOS%2FLt4rL9iVkkochp%2FLs3PZ%2FHP3Qx%2FtLTPTjoLpKrm270mqB09Qqcrhnte1Ee%2B%2FhFU28ycf8R6fd1jv7%2FhQxLQbxG%2BeBrGXClNgimRzNrBi5pXKlDq9QDN09pftIoQ2GoFObgaPXC0%2F%2Fc17Zcqvhox1ETmYEGO%2FX9wgcrlOJg3xpxiIyJhEysua8Gowwj8q5xC0P5KtjdzsvnHJtxzBECZgkiurODJ98ipVIhjT8GnN3fKeWWHMYf5Vxdy4VmJ1HhUMrw5JwFUI9gNQWJCQsyEHbGHN6PIZkortHmdInWDg5wZ5f3NSXfBJHnyJ2vY4NbaV6G90ATXI1YWlxPl1LdQd51fH%2BLs4Tql9m0NSLBg7C6K4vUMJeHwckGOqUBgpNBmitAyl79ek4AZcED6EtrAHdLftvgI1DNOWOo%2BhTaT9C%2F4R6QbjsUiP%2BoOhm2%2FnAhB5lYQ2wbEkYJJHwRGcboJ8yiAl8ovAchrTcM8hEs4Mz1vni2QKdgXmZVcMnKWq7SvCwolYvuawlmh9%2BcMoxyaALea9Jhm3Z6%2B83pK7ksiOofnfuqLnmNv3%2FwIS%2BFOdeBl8ApO60TW7k5KTG7akvCdCeV&X-Amz-Signature=d53bb65533122faa4d4c478869fa4717ad437015567dc5a2ceb9e73c095b799f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

