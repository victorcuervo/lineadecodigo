---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCCLZICJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJlpvt%2FDK9RpIWiU%2BwqRUyKZTPgoPg3czxJCc2OazMewIgY2JHXvaeeQ8jwJGqfbKNX8CtuaHNT2wEM6txMBA9V0EqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUNtkJjO3W%2FdY7pAyrcAyBA8gfra0H7pQbTBcksknriOKILt2uJ6OzBz2%2B%2B7Yz0cYzntG0AWvXg%2FmfVxQihVwF%2FsP0varnVaH%2B0gIMS22Pm1Ir2WTjWo3H%2BSlsMOByE9Wd3LnHbINm6nkkuYjA1%2FU9eZH%2FzzNWgkp5hGzADPlw%2BNqK4NJsl4EdAgzIqjffhTZCLJRCtOEIf677OVcHHT1as2IIWEqVqG%2BnEVqyX0iLtnxdCOZQzgdqo9j%2FctBZ%2FGrogSzA4LglBw7q1Fj1FwIq7Ky9s2Go22iula8P5UHrDJVjMr625pXStgivbc2so2zGbzP20yaRVWa2tRh8Ehek7AB562gltvmtLpZ7qf33l%2FDo%2FcLJT1IeCrFe0bnxYm0kH5fXIhMIIEr4Ue53VOyHyXJsgZtx4abASyK3OwTkxDxc7u7D%2FC%2ByFdlIM98ROMtqnKFrKGohOMsCjM%2BpxqmlS5QHqqV%2FPUf6%2FE8IMbz0vY7XJmQ1xofHtS3vqvt7hGlwyc%2BYZ81l9e2Ksm5Q%2BfhWlLD%2FFTDCT0Tf0C0q73p0k246q5Ok7W4%2BmSqbphQrNMxob7d0w5soTYSTo9fpy8tWyeiOVOenTBS2XVnFjU%2F08%2B6p7fpLe4ehLwgybcnirzUibHOZ4uXvv1nZVMKyi1MkGOqUBaQK8raz9VHy7PTkzRHPjJxhgfSmq70TP1VmOu43qBDUzRV%2BE7%2Fkb8vt5lsUFqXG74XaHDsel8%2Fpxe8k%2Bs%2BUsWZqJhoXslO52n62lRICdI0zZMI28uDoyGRl3tBLxlZqfj3kKUxZJpakYMA%2FdtjuT0IlFn%2Buv0iMw4JRpkDNZPKpYOoOVndbXG8B5jGANIOOHgOFdNUe9rZmV%2Bp3ij%2FQNqxbN3hr1&X-Amz-Signature=df6eb7b6d58243312b002f4c236fef3677e78ae4d4b7c6a3e8c3c48ba16ef78e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCCLZICJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJlpvt%2FDK9RpIWiU%2BwqRUyKZTPgoPg3czxJCc2OazMewIgY2JHXvaeeQ8jwJGqfbKNX8CtuaHNT2wEM6txMBA9V0EqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUNtkJjO3W%2FdY7pAyrcAyBA8gfra0H7pQbTBcksknriOKILt2uJ6OzBz2%2B%2B7Yz0cYzntG0AWvXg%2FmfVxQihVwF%2FsP0varnVaH%2B0gIMS22Pm1Ir2WTjWo3H%2BSlsMOByE9Wd3LnHbINm6nkkuYjA1%2FU9eZH%2FzzNWgkp5hGzADPlw%2BNqK4NJsl4EdAgzIqjffhTZCLJRCtOEIf677OVcHHT1as2IIWEqVqG%2BnEVqyX0iLtnxdCOZQzgdqo9j%2FctBZ%2FGrogSzA4LglBw7q1Fj1FwIq7Ky9s2Go22iula8P5UHrDJVjMr625pXStgivbc2so2zGbzP20yaRVWa2tRh8Ehek7AB562gltvmtLpZ7qf33l%2FDo%2FcLJT1IeCrFe0bnxYm0kH5fXIhMIIEr4Ue53VOyHyXJsgZtx4abASyK3OwTkxDxc7u7D%2FC%2ByFdlIM98ROMtqnKFrKGohOMsCjM%2BpxqmlS5QHqqV%2FPUf6%2FE8IMbz0vY7XJmQ1xofHtS3vqvt7hGlwyc%2BYZ81l9e2Ksm5Q%2BfhWlLD%2FFTDCT0Tf0C0q73p0k246q5Ok7W4%2BmSqbphQrNMxob7d0w5soTYSTo9fpy8tWyeiOVOenTBS2XVnFjU%2F08%2B6p7fpLe4ehLwgybcnirzUibHOZ4uXvv1nZVMKyi1MkGOqUBaQK8raz9VHy7PTkzRHPjJxhgfSmq70TP1VmOu43qBDUzRV%2BE7%2Fkb8vt5lsUFqXG74XaHDsel8%2Fpxe8k%2Bs%2BUsWZqJhoXslO52n62lRICdI0zZMI28uDoyGRl3tBLxlZqfj3kKUxZJpakYMA%2FdtjuT0IlFn%2Buv0iMw4JRpkDNZPKpYOoOVndbXG8B5jGANIOOHgOFdNUe9rZmV%2Bp3ij%2FQNqxbN3hr1&X-Amz-Signature=9ccb69b1db30d5017d736c107a988eebf85fdbc9ecc566359fbd6237dd9c7187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

