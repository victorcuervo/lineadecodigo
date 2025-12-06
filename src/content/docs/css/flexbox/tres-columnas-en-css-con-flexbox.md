---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOEBJ5SV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqF5uWxaP%2FihLSLOs88v%2FploN%2BC%2Fq%2BAtYasuGlseHHyAiEAnt9xDED%2BIjzPmCU2IPxr51h8TOpklYPNFwGJhDJNNz4q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLDFo74%2Fu0iEWazOpircA8pQETQg7H%2FBJwo93WLqiDEAOjL%2FZmsbrQBJy1QVepP7wXzPVqQy57lsGMI5gs7KyU%2BSG%2FIM2bdZmgZvYCraT2SFBpr48K0ox9YPNaD72AojxLz0rXTOFgZXDNVFHK1pZ8vtZ7KlCvVgRSfP%2BhguaKNoXjNZKx7%2B2bQ7SYZOSYN4Jd5IwWjSn7Rj4L3uodg1Up%2BycngZOWE84FGRR6GbbDNTnGLcYH8xF70EGU%2BAY0A%2FzcOCer38P8oVe6KgXDCDjdSPzTCcI0UQFKyCjyj1Bj%2F%2BBYk6S60Ic2H8icuo95oohLRVhFM3ESEE07BMswUrSFdiYc7xRhhr5Jc5LAEuBXPl2%2FqUPctJ%2FtbSBS84vh%2Bv1YhxjkRW0aifVwib5ln7Afap77mQfzHlElbzUTtajgebhhQBMlFWIHAdzsmcHz4YxvXZpOBSHHh9rdeGt4oxdyLi1nICaIFKpyhFqQuEwDbzFb9oB7QqcT5QQFHVljKaMDajYBd4%2B73VXvZ6xtHiDR6ghUFCJbLAPsv7aFCdRRWsSVd4QHWMelXmAjf%2FvV3ShPRrreZGpOmLtn0SwALKLDpXG4XfaJ5R1klZGi8lCdgbuPWPpK7yE2MIychuAEN01y3tvfaArnt7m58oMPOnzskGOqUB3nphp9jDnUYW5%2FjPYFFdNiEOQBZyyGgqlkDMKyUiypA29sANBqluhk9%2FokBzN2X%2Bg0QSrSgBmSGlc8qrdPhTIY4GjYG9RewsmD7eCPWNcJvqxhaHdUo%2FnLCdM8PdP0TypTE5xLfHeQsS9hYQ%2BofHFys4spyQFZIcWQgUyKYa3Haze4UkUzn66Ln1FTIMscl5PJ9cBAcpfb3YWeJ3z%2F3o3V1%2Fy4WR&X-Amz-Signature=f4d47bc3f3ab16b115ce2f73a4a7fd04813c7dd351f3afa6e33f8d2e9ff79c7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOEBJ5SV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqF5uWxaP%2FihLSLOs88v%2FploN%2BC%2Fq%2BAtYasuGlseHHyAiEAnt9xDED%2BIjzPmCU2IPxr51h8TOpklYPNFwGJhDJNNz4q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLDFo74%2Fu0iEWazOpircA8pQETQg7H%2FBJwo93WLqiDEAOjL%2FZmsbrQBJy1QVepP7wXzPVqQy57lsGMI5gs7KyU%2BSG%2FIM2bdZmgZvYCraT2SFBpr48K0ox9YPNaD72AojxLz0rXTOFgZXDNVFHK1pZ8vtZ7KlCvVgRSfP%2BhguaKNoXjNZKx7%2B2bQ7SYZOSYN4Jd5IwWjSn7Rj4L3uodg1Up%2BycngZOWE84FGRR6GbbDNTnGLcYH8xF70EGU%2BAY0A%2FzcOCer38P8oVe6KgXDCDjdSPzTCcI0UQFKyCjyj1Bj%2F%2BBYk6S60Ic2H8icuo95oohLRVhFM3ESEE07BMswUrSFdiYc7xRhhr5Jc5LAEuBXPl2%2FqUPctJ%2FtbSBS84vh%2Bv1YhxjkRW0aifVwib5ln7Afap77mQfzHlElbzUTtajgebhhQBMlFWIHAdzsmcHz4YxvXZpOBSHHh9rdeGt4oxdyLi1nICaIFKpyhFqQuEwDbzFb9oB7QqcT5QQFHVljKaMDajYBd4%2B73VXvZ6xtHiDR6ghUFCJbLAPsv7aFCdRRWsSVd4QHWMelXmAjf%2FvV3ShPRrreZGpOmLtn0SwALKLDpXG4XfaJ5R1klZGi8lCdgbuPWPpK7yE2MIychuAEN01y3tvfaArnt7m58oMPOnzskGOqUB3nphp9jDnUYW5%2FjPYFFdNiEOQBZyyGgqlkDMKyUiypA29sANBqluhk9%2FokBzN2X%2Bg0QSrSgBmSGlc8qrdPhTIY4GjYG9RewsmD7eCPWNcJvqxhaHdUo%2FnLCdM8PdP0TypTE5xLfHeQsS9hYQ%2BofHFys4spyQFZIcWQgUyKYa3Haze4UkUzn66Ln1FTIMscl5PJ9cBAcpfb3YWeJ3z%2F3o3V1%2Fy4WR&X-Amz-Signature=db3eede8e3f4990aa865fa3f4c19a9853ac79cde0d2c6a2729a096628277c375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

