---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q25MNFGN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEk1f8y9Xxz1TLqUG%2FjrM%2FkDxtyzMiJeRK3CKptXmPUdAiEA4Aqs2sXLURcGq2Gx83nR49sJ%2FjxDRrd6Exz4AIOsMm8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjQ0b5INzYRJTR5RyrcA2Tr0hz0bZHz6jKArzxebSFNzXRTZ5F6keyRXzoN1HxBeHK08HHox9reSTYxsmWjeXAIBfnwp49iaE0fU3RxJ1yJ%2BjN8JH3JrJbvIk0IwRUEtQxC4jbEJT3iRwJP5jMB3qWQQw3G8GOeVudtG5%2BquZQhqq%2FWMkuIN4BTQWt8LmzDD3e7QqK4mInCQqfgqLm7J0rlljudJKHXQ1Cc%2FDQX6xQgzCU4U%2B8urXxHc2WSl55N1ROIAazKica545hfr%2FqMwwLs4TPC5GXMCTrwI5VfvdSdLm43dY6OFalvunpJmH8W%2BLVx258dLEl2QdBuq5KSbQRbdGc8RrMEfHVtBx1NrNkB3D8cVPQVURasn97oAW8ZAfSYqUUA%2Fk0UUFErdMIKWilSvKnLZWjwsX%2Bfpft4JQUNBNkOx3AtqBKHR7Sd73v%2Bnvn4i5ywxykZP4WJXw2Ktaf9zoGYHuIFf%2B8QgX5YiBaP5gRh%2BVsbyAqI6xeU%2BFNn%2BtS%2BnNM8wTIMFthIjYI821PyHmv6rcSud8KwGGGIpzv8Q1nUC1IgR535JD%2BNWP6mFy1PvkJhwmkjc6i6aOBxzxQZQY1ETytxxkDwCqvRz3amK68vlzmNWNT50IOQNajsePT94H6TBbHOyMrMMO2a1ckGOqUBQUGqQprDrMK24CEOuJW18GRjFE1BFIoQnlVpLJZI5gFuwY%2Bw6lJZ136sQwlWoEdpmYdwZChTqa5NViWWzoAXHVLBt3nsHr%2F00sJLL%2FlHfGxFVIpsEs3TXRIQ8MDGuug3b62HLi9aAD3LGUTum%2Fz0gKC1IMDBljZuov%2BXOlfpzFVo4rEhwUbSfjP2T7ktX1OSV%2B738DqUQ5ATLBkCaxSYn%2B0zzXm%2B&X-Amz-Signature=797694c5ff9d53c42eedebff06cbe931f1dcf2480930537bb352abeab1abe1b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q25MNFGN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEk1f8y9Xxz1TLqUG%2FjrM%2FkDxtyzMiJeRK3CKptXmPUdAiEA4Aqs2sXLURcGq2Gx83nR49sJ%2FjxDRrd6Exz4AIOsMm8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjQ0b5INzYRJTR5RyrcA2Tr0hz0bZHz6jKArzxebSFNzXRTZ5F6keyRXzoN1HxBeHK08HHox9reSTYxsmWjeXAIBfnwp49iaE0fU3RxJ1yJ%2BjN8JH3JrJbvIk0IwRUEtQxC4jbEJT3iRwJP5jMB3qWQQw3G8GOeVudtG5%2BquZQhqq%2FWMkuIN4BTQWt8LmzDD3e7QqK4mInCQqfgqLm7J0rlljudJKHXQ1Cc%2FDQX6xQgzCU4U%2B8urXxHc2WSl55N1ROIAazKica545hfr%2FqMwwLs4TPC5GXMCTrwI5VfvdSdLm43dY6OFalvunpJmH8W%2BLVx258dLEl2QdBuq5KSbQRbdGc8RrMEfHVtBx1NrNkB3D8cVPQVURasn97oAW8ZAfSYqUUA%2Fk0UUFErdMIKWilSvKnLZWjwsX%2Bfpft4JQUNBNkOx3AtqBKHR7Sd73v%2Bnvn4i5ywxykZP4WJXw2Ktaf9zoGYHuIFf%2B8QgX5YiBaP5gRh%2BVsbyAqI6xeU%2BFNn%2BtS%2BnNM8wTIMFthIjYI821PyHmv6rcSud8KwGGGIpzv8Q1nUC1IgR535JD%2BNWP6mFy1PvkJhwmkjc6i6aOBxzxQZQY1ETytxxkDwCqvRz3amK68vlzmNWNT50IOQNajsePT94H6TBbHOyMrMMO2a1ckGOqUBQUGqQprDrMK24CEOuJW18GRjFE1BFIoQnlVpLJZI5gFuwY%2Bw6lJZ136sQwlWoEdpmYdwZChTqa5NViWWzoAXHVLBt3nsHr%2F00sJLL%2FlHfGxFVIpsEs3TXRIQ8MDGuug3b62HLi9aAD3LGUTum%2Fz0gKC1IMDBljZuov%2BXOlfpzFVo4rEhwUbSfjP2T7ktX1OSV%2B738DqUQ5ATLBkCaxSYn%2B0zzXm%2B&X-Amz-Signature=faa1f65959a8ba41b185c366b12baccde6bf6a34789f2fc8eb144982306ebd0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

