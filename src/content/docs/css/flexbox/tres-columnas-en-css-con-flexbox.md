---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664NN4B7E%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIUZENiSDH6O96R0RAQsFDSc27WN95KV2CR3BL57oADAiA75Y0S6Hs2PS5eTIztTUAmKzsQZVT%2Fzy1IrnH0wdw1Xir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM2lmMETkBxdecboitKtwDnS3PvVZ9HVGMusRbLSXH%2B2bgnqbRWOJtfNnrIRB%2BGugw%2FEB%2BVMj0ByFswNIDHEsuz5UQ8fdkHQqP%2FNKuahqJum2WXZVobuEwB9Zi8SlBXefe%2BHMgtbc%2FghPQhdOaSJnx5gORo7Z6lai9ETVm2Q8EaUAhgAJkQ84uGBC00z%2FPMuLI35TqBjLtEpuyFazozDjlkzheehd%2FJ12sPVmD26SH3DiEiNPxYAf3nvr7HrLqpBf91JZXREjPkCfNkFd3qguNsuKuzCtvOh05d5264LjbmjfGjoL35Tv8%2B8vOU6RjzMtxmbPbyZDuT%2F382UbY%2FKCSDpkBVbs5EDvio2Eqf5LQzyBqktui28VxF9UUgyl28oxOFzB16VZ66yTZP%2FiokfxWjVNDQW75m6vejHHxuW7cucb95y4pPnPbPnHgtNiOZTQrU5%2B%2FM11k9tTdm%2F6PnBhL6NdJSesO45Q%2FXrgz9C4PKK75xed0sZHw5qOQSYGlZFUB76M2t4PmiN3BiUYymebWk1SG5HT28k%2B3I61RrH7eygjRH1BehZSAL4xOAsI16CQvGr7ysqmQXLsE15tdQRzOU0V7nqGLXAR7QH5472yEpQfiOGlan%2FmbpgAp33W%2B9zOPnRfALgeQ5yC3LSIwqsfRyQY6pgGu3klsiPjmOUGscEvlNhTctUI8orzj9EGs9Wh0rP17Ombg%2F0wOD%2F6KOFXNEev86hTZoi%2B9anr5JccvHx8qosL8ZvuRRcZLJLENmRPP11N2W2RpqpwYL1xKzuc8yE63vq6InGhfN1OBDuLsFDb537W%2B43fAGhqPNjOy1hZ0i7leTGOuFp%2B3N%2FR%2BjKfn3IeZXyHmcrrFaKM87wUIk9Bu1%2FlPKw3uRI%2B1&X-Amz-Signature=9da3fbf01914e3701d34ba3dcdb87e28b7c673007acea2bc44417e361010c801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664NN4B7E%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIUZENiSDH6O96R0RAQsFDSc27WN95KV2CR3BL57oADAiA75Y0S6Hs2PS5eTIztTUAmKzsQZVT%2Fzy1IrnH0wdw1Xir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM2lmMETkBxdecboitKtwDnS3PvVZ9HVGMusRbLSXH%2B2bgnqbRWOJtfNnrIRB%2BGugw%2FEB%2BVMj0ByFswNIDHEsuz5UQ8fdkHQqP%2FNKuahqJum2WXZVobuEwB9Zi8SlBXefe%2BHMgtbc%2FghPQhdOaSJnx5gORo7Z6lai9ETVm2Q8EaUAhgAJkQ84uGBC00z%2FPMuLI35TqBjLtEpuyFazozDjlkzheehd%2FJ12sPVmD26SH3DiEiNPxYAf3nvr7HrLqpBf91JZXREjPkCfNkFd3qguNsuKuzCtvOh05d5264LjbmjfGjoL35Tv8%2B8vOU6RjzMtxmbPbyZDuT%2F382UbY%2FKCSDpkBVbs5EDvio2Eqf5LQzyBqktui28VxF9UUgyl28oxOFzB16VZ66yTZP%2FiokfxWjVNDQW75m6vejHHxuW7cucb95y4pPnPbPnHgtNiOZTQrU5%2B%2FM11k9tTdm%2F6PnBhL6NdJSesO45Q%2FXrgz9C4PKK75xed0sZHw5qOQSYGlZFUB76M2t4PmiN3BiUYymebWk1SG5HT28k%2B3I61RrH7eygjRH1BehZSAL4xOAsI16CQvGr7ysqmQXLsE15tdQRzOU0V7nqGLXAR7QH5472yEpQfiOGlan%2FmbpgAp33W%2B9zOPnRfALgeQ5yC3LSIwqsfRyQY6pgGu3klsiPjmOUGscEvlNhTctUI8orzj9EGs9Wh0rP17Ombg%2F0wOD%2F6KOFXNEev86hTZoi%2B9anr5JccvHx8qosL8ZvuRRcZLJLENmRPP11N2W2RpqpwYL1xKzuc8yE63vq6InGhfN1OBDuLsFDb537W%2B43fAGhqPNjOy1hZ0i7leTGOuFp%2B3N%2FR%2BjKfn3IeZXyHmcrrFaKM87wUIk9Bu1%2FlPKw3uRI%2B1&X-Amz-Signature=6f40f660b38b5c890ae6f38ee280733449158204a0ed7ae9b330f334b5366780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

