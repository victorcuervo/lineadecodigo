---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ACBLQ3I%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T012523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm%2BqZ3ob%2F5Jcdf13yhMN7w97L7sqR8%2B94%2BmzSMcqm%2BZgIhALp7JDs9qjOf2y8peHuHTnkgfZoaBu4nFXqdVQbBFDLtKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igznn0%2F%2BjzKnCaqnaYEq3AO7IDqpEWT%2BtH9CsYkSt3%2B6l9bVh%2BiBSeftzxtCU8Cdf6mFhnBbbIQYRw2EBycDuph2ALhwbxiMkdqwY7V0S%2FU6qFAwefxTRJu5FL6vyBFnAtNHNGP7SdVQyFkt%2FPuTiwkEMEycefjfCsyxeSEzZb1%2Bnl8zHU615WSxTWNL%2FWayNMKZfERLF43u2ZhrgNN3hV6SJ0Eddim%2FZu0UxZOUmvDhB4868KBZrvx5piNoQNsb1tIoocMNB57eMLtR0%2FVpLY8wP2DBqzxZtLrVXotza1YDjgPnFdhtiZF6tCD9hdpFbvUTwQKJbPT27XzefLP00USbZNA%2FWsteToO6V6ui7Llh9J60dD91UXUQ%2Bl%2FePqhPVNgeSWExqA%2FaBbuU8KiBf18XfFtoC0AFrSCg8oCXYSQwCJxjs7wTEjOBXdsxL7Fkp%2BbXIsGCFQV3Gq%2Fa7CgN0PCVGzSlIKqLCDi6yUGCezoiy2YRvxdvSkBQAoYXwL%2FxcHAmxqKc5khKo5yZPgCr%2Be696RNG2MrFhcZ3E%2FQQaC%2BEDnzKPc0maYequWinBQY%2Bk5a%2BO%2FAv0efOts4HuY1GlyNqgqjQ4I1R1sxbe%2FVjT1EMse%2BB9tNDbxXETxKYiYYMbEJV%2FpJ8rBVN%2BbnpBTDB0NjJBjqkAaVRMnn4ItmUQNvqnSawMRMdJS7QigIFiEVvVIHiDLKKvo%2FXuyLGWqoZfvmLGi2tm3kPCBkCPv3mQukW0kasqo0DmiPbx%2FJFP3X4gH5jS2ME%2Bs7Jb3PiDMzIHrdUkhe94ClS8Mr7PuPAFxJYtV4r7%2FoG2M3qmk%2FwuGBBufVyFk9tiHH4%2FfdY0GjEaDJIexOumlSVC56E8VEqf%2FNhThDt%2FNk0A5tR&X-Amz-Signature=14d03675d7c914368865db8a789288a416506db215a64f10f7ba609afdba2493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ACBLQ3I%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T012523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm%2BqZ3ob%2F5Jcdf13yhMN7w97L7sqR8%2B94%2BmzSMcqm%2BZgIhALp7JDs9qjOf2y8peHuHTnkgfZoaBu4nFXqdVQbBFDLtKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igznn0%2F%2BjzKnCaqnaYEq3AO7IDqpEWT%2BtH9CsYkSt3%2B6l9bVh%2BiBSeftzxtCU8Cdf6mFhnBbbIQYRw2EBycDuph2ALhwbxiMkdqwY7V0S%2FU6qFAwefxTRJu5FL6vyBFnAtNHNGP7SdVQyFkt%2FPuTiwkEMEycefjfCsyxeSEzZb1%2Bnl8zHU615WSxTWNL%2FWayNMKZfERLF43u2ZhrgNN3hV6SJ0Eddim%2FZu0UxZOUmvDhB4868KBZrvx5piNoQNsb1tIoocMNB57eMLtR0%2FVpLY8wP2DBqzxZtLrVXotza1YDjgPnFdhtiZF6tCD9hdpFbvUTwQKJbPT27XzefLP00USbZNA%2FWsteToO6V6ui7Llh9J60dD91UXUQ%2Bl%2FePqhPVNgeSWExqA%2FaBbuU8KiBf18XfFtoC0AFrSCg8oCXYSQwCJxjs7wTEjOBXdsxL7Fkp%2BbXIsGCFQV3Gq%2Fa7CgN0PCVGzSlIKqLCDi6yUGCezoiy2YRvxdvSkBQAoYXwL%2FxcHAmxqKc5khKo5yZPgCr%2Be696RNG2MrFhcZ3E%2FQQaC%2BEDnzKPc0maYequWinBQY%2Bk5a%2BO%2FAv0efOts4HuY1GlyNqgqjQ4I1R1sxbe%2FVjT1EMse%2BB9tNDbxXETxKYiYYMbEJV%2FpJ8rBVN%2BbnpBTDB0NjJBjqkAaVRMnn4ItmUQNvqnSawMRMdJS7QigIFiEVvVIHiDLKKvo%2FXuyLGWqoZfvmLGi2tm3kPCBkCPv3mQukW0kasqo0DmiPbx%2FJFP3X4gH5jS2ME%2Bs7Jb3PiDMzIHrdUkhe94ClS8Mr7PuPAFxJYtV4r7%2FoG2M3qmk%2FwuGBBufVyFk9tiHH4%2FfdY0GjEaDJIexOumlSVC56E8VEqf%2FNhThDt%2FNk0A5tR&X-Amz-Signature=ecd6b11e211e58bcc9c47e6e3a54e937d8d0cadcc5e5fb867434658a3aa9f032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

