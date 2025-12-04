---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GQQQI4X%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDCeCSB3%2FPfs9G5L76yvOF7CdFxjUQUAnS8C9ViQ1f1IAiEAlz%2FRdFkS1QcD%2BAO5G32PibGQdU3cSWJlmBx3H015Sasq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHsJ5hx6rA9powkL%2BSrcA9XP%2BVmqA6y5XIyFTN0Tg0GTnId%2BGhaTHv9tZYxsnfz1XxN9AdbE7upiIm2e06MLdDy5xR4%2BO9wQU8G5g9m6zWgGwh63lAT5pwJ6c%2Fjv%2BFeaNgu8MRtQOFFPW9i6Lgt0BgE3RG%2FEkYWPRCApPKvmUSr9ZjcE3FYU4lZ%2Fg%2FOySYAYOL%2BbEHWAtcQZIT05mO0dt%2BaU6DbSPZditLtEPAUkVi2a9hAXFCewWc6eCdmWqQy8ux%2B6dJQ8H51RSjqGk3czPG80xUI3DQUHNcm9AVwmkz44849WUUlRX%2FqCYTEQWhXX6KDqPS7%2BaX2wg%2BHVdEmo9o%2F9tcxBQUQu5AelZjM5KoUvICgAP9qehwR8yzQjCFd9TXSBKx%2BRbNjv7uDn8MPI%2BOUOlI7NJPbrjsrIutqXCnW61VcUditZORBPV5jquoqBiSypXGCsuZX6gUIfo0CnQf6n6iYOozaGDPTpEBDT7TK6vX%2BwOdOZpm2vfogIHRbABr1UVqgM0YcJfrooBujDIMd1Mpvbpcn2E%2BxZc2HYqDIfq%2FfyCq7c%2FtieN%2B9A9E3nJLokd7patzTmAZqAvVp13G68iEdFbbHPaKYWGCogSXczL35l9KoU0P9HLjBkfJM1GDOEvvtlZkcx78MHMILLxMkGOqUB5jNVEEebcmsjg%2F0pOOyU0Co8ZbeT%2Ft32b88rKfbXgmNSFJkGytn%2FAbYFSs14jv9sWGV%2F06pdpYCXpcdTBVdUrLTSkr2CLrYoJu2HGLkylrG2eNmEeZOJOaqzJwjkjAj1mUryLrqJ2v%2FqCX6VEWXYUdbYZzDQoPN52k4QTbC8vEphgWEyRYFeifsHDBDsJXnY0UZf5aPWoG24oDZzWolGqaFA16v%2F&X-Amz-Signature=4b71639a9945fa73ee65293bbfe746eaf8903b6fa5dedfafe44ce8a9ccc3b47a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GQQQI4X%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDCeCSB3%2FPfs9G5L76yvOF7CdFxjUQUAnS8C9ViQ1f1IAiEAlz%2FRdFkS1QcD%2BAO5G32PibGQdU3cSWJlmBx3H015Sasq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHsJ5hx6rA9powkL%2BSrcA9XP%2BVmqA6y5XIyFTN0Tg0GTnId%2BGhaTHv9tZYxsnfz1XxN9AdbE7upiIm2e06MLdDy5xR4%2BO9wQU8G5g9m6zWgGwh63lAT5pwJ6c%2Fjv%2BFeaNgu8MRtQOFFPW9i6Lgt0BgE3RG%2FEkYWPRCApPKvmUSr9ZjcE3FYU4lZ%2Fg%2FOySYAYOL%2BbEHWAtcQZIT05mO0dt%2BaU6DbSPZditLtEPAUkVi2a9hAXFCewWc6eCdmWqQy8ux%2B6dJQ8H51RSjqGk3czPG80xUI3DQUHNcm9AVwmkz44849WUUlRX%2FqCYTEQWhXX6KDqPS7%2BaX2wg%2BHVdEmo9o%2F9tcxBQUQu5AelZjM5KoUvICgAP9qehwR8yzQjCFd9TXSBKx%2BRbNjv7uDn8MPI%2BOUOlI7NJPbrjsrIutqXCnW61VcUditZORBPV5jquoqBiSypXGCsuZX6gUIfo0CnQf6n6iYOozaGDPTpEBDT7TK6vX%2BwOdOZpm2vfogIHRbABr1UVqgM0YcJfrooBujDIMd1Mpvbpcn2E%2BxZc2HYqDIfq%2FfyCq7c%2FtieN%2B9A9E3nJLokd7patzTmAZqAvVp13G68iEdFbbHPaKYWGCogSXczL35l9KoU0P9HLjBkfJM1GDOEvvtlZkcx78MHMILLxMkGOqUB5jNVEEebcmsjg%2F0pOOyU0Co8ZbeT%2Ft32b88rKfbXgmNSFJkGytn%2FAbYFSs14jv9sWGV%2F06pdpYCXpcdTBVdUrLTSkr2CLrYoJu2HGLkylrG2eNmEeZOJOaqzJwjkjAj1mUryLrqJ2v%2FqCX6VEWXYUdbYZzDQoPN52k4QTbC8vEphgWEyRYFeifsHDBDsJXnY0UZf5aPWoG24oDZzWolGqaFA16v%2F&X-Amz-Signature=91c87afb21a3d30bca83bc4ce802ee12e3f6588bfe4463d06c49497ef65a0e87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

