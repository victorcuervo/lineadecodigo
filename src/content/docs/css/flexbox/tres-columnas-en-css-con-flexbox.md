---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2UEFIBZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T013143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDZl2yyDfkOx5gBjIKEMX%2FQj77ihnk0J2%2FuhV9cDkL%2BAiAzwnXe20IktFzfKTrmR1SkKBTq6%2BgHRfKGchCPVZbdGCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXRGVD3nyX3Gcw7rpKtwD1xoUdRThvLPVSUBZ1FnPiGIgtzL%2FFvkNXAbYX36b1%2BoDIK9mtYuCmaFAvxAfSkcDz3aMK1w0O5dB3obbm7nNmGiiLP8WPV9PyDYl1a%2BD3quxwJfzD090egjlkmw6s7BCEg3gVYxpn%2Bd7N2S3a0CN18lueYttkabAEsM7dOeTlW6bnCjvImFucchTLOJpOg9%2B71X2ovIquyeuurrJyUhblBex3lARWxGz03T0vHjfP6pc5VpzltV3T%2BRDzrzQAEEqzGTezlCaX8T8JdG4IS00%2Fior3jebdY8MkhA%2FlnrIM69MiKOSa5MLmjFCHXXecHXnzLtBHVgznLb6Yz0vAoQUhjAjurhxPB%2F8B16L805nN%2FLYPaAy9kn1vrS9495uTNyzwtaWFLHoV0uac6M5qDxa0lkwercCY%2FkO8aNwhH0YZp1Ukm8vOZT%2FjaC3GPgjgy4JgtJBpl9j7cfpc6qRZ4Fxp5PPHQRJiuHk%2B9yBkQdA0FwXb1zHXpB%2FCZwMEn31%2F0Qq%2FWHUGY6xUyNQzLmaFtN9v4sl8yuKqjmsW9SOLV2upuMQj%2BlBmRc4WBX%2F70w4%2BGQBvw6QQ%2Fp5%2BVMgeXEHhBBXJjgPDzlnB92f%2Bv8b90dL%2BVw98kemgPvLmUZ4WXUwndHYyQY6pgE7SU7I4CD5UWj%2B0YGwqBGhkhGOIZZF%2FYTSEhKChXne63IAomOcsQND2n%2BgxVE6Sj2ClTd6V4PjPgZr1kSAOjSB3hCbiwCn7Oyx90nZTZV6BozPGr1k5fAhb%2BkVDibClCYwMy0EKTVvI54iYAQ36cT1Zr%2BdXH31rKu%2BLC5VUE2epR0QzijFGWHowW%2FVULtZxlVDdWm7bNTtYwIoQwSzYX%2B0jkdfKZkX&X-Amz-Signature=9942c00397a0a2f5d5f3c111b86a5d792659fddde8c9dfa97d9e68fba5f5c5c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2UEFIBZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T013144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDZl2yyDfkOx5gBjIKEMX%2FQj77ihnk0J2%2FuhV9cDkL%2BAiAzwnXe20IktFzfKTrmR1SkKBTq6%2BgHRfKGchCPVZbdGCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXRGVD3nyX3Gcw7rpKtwD1xoUdRThvLPVSUBZ1FnPiGIgtzL%2FFvkNXAbYX36b1%2BoDIK9mtYuCmaFAvxAfSkcDz3aMK1w0O5dB3obbm7nNmGiiLP8WPV9PyDYl1a%2BD3quxwJfzD090egjlkmw6s7BCEg3gVYxpn%2Bd7N2S3a0CN18lueYttkabAEsM7dOeTlW6bnCjvImFucchTLOJpOg9%2B71X2ovIquyeuurrJyUhblBex3lARWxGz03T0vHjfP6pc5VpzltV3T%2BRDzrzQAEEqzGTezlCaX8T8JdG4IS00%2Fior3jebdY8MkhA%2FlnrIM69MiKOSa5MLmjFCHXXecHXnzLtBHVgznLb6Yz0vAoQUhjAjurhxPB%2F8B16L805nN%2FLYPaAy9kn1vrS9495uTNyzwtaWFLHoV0uac6M5qDxa0lkwercCY%2FkO8aNwhH0YZp1Ukm8vOZT%2FjaC3GPgjgy4JgtJBpl9j7cfpc6qRZ4Fxp5PPHQRJiuHk%2B9yBkQdA0FwXb1zHXpB%2FCZwMEn31%2F0Qq%2FWHUGY6xUyNQzLmaFtN9v4sl8yuKqjmsW9SOLV2upuMQj%2BlBmRc4WBX%2F70w4%2BGQBvw6QQ%2Fp5%2BVMgeXEHhBBXJjgPDzlnB92f%2Bv8b90dL%2BVw98kemgPvLmUZ4WXUwndHYyQY6pgE7SU7I4CD5UWj%2B0YGwqBGhkhGOIZZF%2FYTSEhKChXne63IAomOcsQND2n%2BgxVE6Sj2ClTd6V4PjPgZr1kSAOjSB3hCbiwCn7Oyx90nZTZV6BozPGr1k5fAhb%2BkVDibClCYwMy0EKTVvI54iYAQ36cT1Zr%2BdXH31rKu%2BLC5VUE2epR0QzijFGWHowW%2FVULtZxlVDdWm7bNTtYwIoQwSzYX%2B0jkdfKZkX&X-Amz-Signature=6390417180e2f65f0832854464a8bca32e20f5c8a012dcbe2714a00f82c0733e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

