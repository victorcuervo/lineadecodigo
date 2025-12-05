---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W2ECMIQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T172235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfocBMf0ZUwaionrw9si5ukvARs26TNZXYSUYZweAylAiBczhxkPF3VPlAKyOaQzItQQtNU73xXar%2FQcSYjHYiBKSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMpG5S2Jt%2FQ3dP%2Bs5mKtwDwrQeQmCdZLv3oGRsu1rYm1E9exz2Xgd4oRxEB2OfG2NFJy73mvWyKvfIM7z%2FA0m0t%2F%2F51pQ%2FQaHpYQ6YvSsByowxKEOgSSCM3wmGsW8GhcqBbrrFs2x4rZQ3DfmUlidCZJyvvUE7vBNdmTZaFb8%2Bq9ZM9kCkCkzP9xH8yz26S5T2YVtucGq8JWaNdAfMreGn3pNSvcENZY3RF8yZR2yoRCIVdc9BnHwPGMGLbVignPe%2Ba%2B4yJ8fsN5rc551ouaregggBsjuxz77DZd3xIEwX1pLXuKv%2BW%2ByryU8N5Ryc19JVnO%2FSuOE%2FgN859be28KOL3MsoUvhM4nYEAE8CaBypsLLrf3UvhsUAszkyybUEZmuL9mHjYEHaAWsA0aYlsg5PB0aKeOlwAfPX7z5BmnBjOrdDPPN6YzrwXuXneX5%2B4MJdcDZD6sW5GK93%2FRBj778owLMD5k3v8pNfzqMCPDbO4oAlrTOVsjI8R%2FcB7N2rNjgHoAXu571ArPN4wrU4E9yvlsS6nPY%2FROFMu1HpMYNCcAPr1wXmsBSsbhtPlMdKSUH00z5IRXTRuXIDNDA0T409CyaM%2F3QtEKTpeu%2BX%2BzQtjFj7rd5J9vKiYu%2BCfhovwTItNdZFtE6Sc%2FrSH%2BIwqvPLyQY6pgHk6UYElm%2FWTGkOrAt6e%2BsuOgZ4H7VCJr9aw4ZSV1jfgldg1f2cNinF92MFRM%2F382fXmRL7dEWiPruC6T1MxQXahcXckwSBkj0qs3e60X8U3o2Oy6QMKsZPSmqBTuwmu8uAdKwQ%2BGdzVy6SeksmiElmKq1RBpGmkbf3jWSJhY42K8RT%2BHSE%2FV1I%2BhIxD1vk1vs2mPkyHTuXxydPxpXy6%2BdZ0Cu8afWa&X-Amz-Signature=a664be778d0125701683887283f98fa2d776c5aa8ea7cc8ee89a90a31ddeebec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W2ECMIQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T172235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfocBMf0ZUwaionrw9si5ukvARs26TNZXYSUYZweAylAiBczhxkPF3VPlAKyOaQzItQQtNU73xXar%2FQcSYjHYiBKSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMpG5S2Jt%2FQ3dP%2Bs5mKtwDwrQeQmCdZLv3oGRsu1rYm1E9exz2Xgd4oRxEB2OfG2NFJy73mvWyKvfIM7z%2FA0m0t%2F%2F51pQ%2FQaHpYQ6YvSsByowxKEOgSSCM3wmGsW8GhcqBbrrFs2x4rZQ3DfmUlidCZJyvvUE7vBNdmTZaFb8%2Bq9ZM9kCkCkzP9xH8yz26S5T2YVtucGq8JWaNdAfMreGn3pNSvcENZY3RF8yZR2yoRCIVdc9BnHwPGMGLbVignPe%2Ba%2B4yJ8fsN5rc551ouaregggBsjuxz77DZd3xIEwX1pLXuKv%2BW%2ByryU8N5Ryc19JVnO%2FSuOE%2FgN859be28KOL3MsoUvhM4nYEAE8CaBypsLLrf3UvhsUAszkyybUEZmuL9mHjYEHaAWsA0aYlsg5PB0aKeOlwAfPX7z5BmnBjOrdDPPN6YzrwXuXneX5%2B4MJdcDZD6sW5GK93%2FRBj778owLMD5k3v8pNfzqMCPDbO4oAlrTOVsjI8R%2FcB7N2rNjgHoAXu571ArPN4wrU4E9yvlsS6nPY%2FROFMu1HpMYNCcAPr1wXmsBSsbhtPlMdKSUH00z5IRXTRuXIDNDA0T409CyaM%2F3QtEKTpeu%2BX%2BzQtjFj7rd5J9vKiYu%2BCfhovwTItNdZFtE6Sc%2FrSH%2BIwqvPLyQY6pgHk6UYElm%2FWTGkOrAt6e%2BsuOgZ4H7VCJr9aw4ZSV1jfgldg1f2cNinF92MFRM%2F382fXmRL7dEWiPruC6T1MxQXahcXckwSBkj0qs3e60X8U3o2Oy6QMKsZPSmqBTuwmu8uAdKwQ%2BGdzVy6SeksmiElmKq1RBpGmkbf3jWSJhY42K8RT%2BHSE%2FV1I%2BhIxD1vk1vs2mPkyHTuXxydPxpXy6%2BdZ0Cu8afWa&X-Amz-Signature=8c96f17e5ced4d342c877934d30af4001454f6457956b11f5418ea9cbbf04c4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

