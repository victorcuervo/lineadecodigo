---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNCWLAPN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH1y0yB6bgIEpBKL0KU0JmebvTK1TmQ97AepSiTg8NhECIHnxUuFugZL8Ss5wbn0uKSsnK4WHO%2B%2Bop1Um4rA9TjMQKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN64AZa72V7TGriBAq3APrMsz4ziqTYvYxWjTL7i3jqS5pj9TUcoBufnWXPLpzJg%2BaHORWCWytkwpuFrbdmg10xS6y9f5dNxnzo9fPacsG8M9v24MFZns4sbmihxmntFvnnUN9vIzS%2F9EUaOTRauEfl%2FY1ymk%2F9YkabH4ygbbuo1jFa1FXLQg5QTBjxYVXW1OIxrgX8q4Q7Reu2qcGFTfwEDz%2FIWe1PLgXU2XP7lPIpvWCN91ZOrsm53qHx2hEVdK%2FM9dAOxnE%2BgGX6v06Ftkt9wY1u1yDuvEK%2BvvHsvkU%2BhiogjdlS6mxUb9%2Fio4fgf6DL1x%2Fq%2F%2Bs7Te7vUttw8L5XdE%2B3HS4vL74a%2FReP%2BpZto0E3jUCPIc5VrxChDeyfW%2B3NLzTPx%2BloJKODjEtm%2B1ZZ4tZaasca6r2nYlCxMPliQe5mxXiKxL2MamV6pineIeRc7Gr7eGNW6Dy0isdw%2FQoA83F4n64W2%2FWNH50cb7olVWhKEoPxYMWfKz%2Fb6wqNcn6Pg9qySqltyKO7Omuv5kST5YQt9BulcUy0edALiG9p%2FvmKz3ea%2F%2FAgpJjZFbj4eEH7zGWvd4h0zcPtO1tHVfyZcXCV1bt84lVtt9jb3m3Yj4OnRNO3OrZmrUohOVvDS%2Bc9YhE8bnyMTwMpjDFh9zJBjqnAUvn2%2FyVeW48O%2FOJn6RcXz55Hsyjv%2B9ovW3Rc1XFksxaziZkd6hcgkt0CPh6fzweaksZ7EWOVSZ%2BqrAl%2FBoetU0jVSb%2BdmbrJgNjuu6LNZlFbvuMbVLUPxBwdX8iLCROad%2F4mBCltrCnAds6iHx8HVhdZMF5bSTPrQZ5DqxsP%2F7rLtgz9RkX261ppne%2F2LdmU49tbomjxmNTtLLWR%2F2TkIEh9camoa%2FB&X-Amz-Signature=c0555d070b53a1154516ffa9d0576c465dff9f1aa6cb8864d8b1ff12e860547e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNCWLAPN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH1y0yB6bgIEpBKL0KU0JmebvTK1TmQ97AepSiTg8NhECIHnxUuFugZL8Ss5wbn0uKSsnK4WHO%2B%2Bop1Um4rA9TjMQKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN64AZa72V7TGriBAq3APrMsz4ziqTYvYxWjTL7i3jqS5pj9TUcoBufnWXPLpzJg%2BaHORWCWytkwpuFrbdmg10xS6y9f5dNxnzo9fPacsG8M9v24MFZns4sbmihxmntFvnnUN9vIzS%2F9EUaOTRauEfl%2FY1ymk%2F9YkabH4ygbbuo1jFa1FXLQg5QTBjxYVXW1OIxrgX8q4Q7Reu2qcGFTfwEDz%2FIWe1PLgXU2XP7lPIpvWCN91ZOrsm53qHx2hEVdK%2FM9dAOxnE%2BgGX6v06Ftkt9wY1u1yDuvEK%2BvvHsvkU%2BhiogjdlS6mxUb9%2Fio4fgf6DL1x%2Fq%2F%2Bs7Te7vUttw8L5XdE%2B3HS4vL74a%2FReP%2BpZto0E3jUCPIc5VrxChDeyfW%2B3NLzTPx%2BloJKODjEtm%2B1ZZ4tZaasca6r2nYlCxMPliQe5mxXiKxL2MamV6pineIeRc7Gr7eGNW6Dy0isdw%2FQoA83F4n64W2%2FWNH50cb7olVWhKEoPxYMWfKz%2Fb6wqNcn6Pg9qySqltyKO7Omuv5kST5YQt9BulcUy0edALiG9p%2FvmKz3ea%2F%2FAgpJjZFbj4eEH7zGWvd4h0zcPtO1tHVfyZcXCV1bt84lVtt9jb3m3Yj4OnRNO3OrZmrUohOVvDS%2Bc9YhE8bnyMTwMpjDFh9zJBjqnAUvn2%2FyVeW48O%2FOJn6RcXz55Hsyjv%2B9ovW3Rc1XFksxaziZkd6hcgkt0CPh6fzweaksZ7EWOVSZ%2BqrAl%2FBoetU0jVSb%2BdmbrJgNjuu6LNZlFbvuMbVLUPxBwdX8iLCROad%2F4mBCltrCnAds6iHx8HVhdZMF5bSTPrQZ5DqxsP%2F7rLtgz9RkX261ppne%2F2LdmU49tbomjxmNTtLLWR%2F2TkIEh9camoa%2FB&X-Amz-Signature=ffc57e56ef59095566b5d965aea9893d11434279abf1ffdcfcbc7bdde07fe580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

