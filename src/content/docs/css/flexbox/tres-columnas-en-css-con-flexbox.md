---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O2MCNSH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDiHDip23rDzy1culZr0itabe7rahkQU0NWlfE0nUN%2FDAiEAj3TfdfuuxscKbx%2FmeOnwXNSxNU%2FUt93JX9ComCde2egq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAZuon9taIZRrH3MwCrcA8LXQniscEpymMOIAxM%2BhsqItAU3B6CDRIC%2FneCjVPB5TvsoLjuZWqySBDOKqMJd5i8tIyER5Nnq%2Fz4Pt0hmFSYrm47gTunZOnoJzgG77sb6PiUFS0jdp3Cx17ulyZ07pZmpm54vytT445VntOjdnsdLFsl78EamTMxGLhGn5c3m7jNY4zR3aDrzvf2mpTByhdONANXgOP%2B1EFzg6Tpx9B%2B%2FApj4ZozupRsAWWpJHpvlOwPz9OuINThpD23mIRrZi9b%2BNZRzf0GdTqt6q7R9pOBtCgFHkrfzGPXSzgtm8oK9PATad03XItpGnFEWNO5FUz%2Fytsh%2B3AYjqVj%2B8b2A5kSkewm2nKtxkuamFIfugupvEkBODT1tayboWPAQFFRrqJ9AZ7LMWt0G5gWVaS2HSWHJsSYrK%2BdYeSg0lNvmcwpqItWknGUoXm26oqa8r2KuHTC84Mucq%2B2Ri6ybQEqYSDFkeC1tdMUuRXrwrmbO4Gau7b9mpwqmJaiclLTfWITLmsWhOXCCHc0vDZZY2eGto75iZ7jnzTIRBkj7IlwLGF4pEtl8PMyX0Yla%2B0DmsJe1dVxG%2BlZZOZ8A%2BlAc1xJ0Jv7xN2fRLaZ7axVEnrlqJnpso%2F65IJYbeFMI4FBMML7nxMkGOqUBSmDDu3F2Cj6ANz6oysid8889V2hYn%2BoNkHs9xxVVBY9PHAz9v%2BvsgjF%2BX5B5azXABoJ%2FKZGFAPdGpef6A1mCn1USuPcuJ1BV4d5a%2BjfOgO%2BJTVHnKMnRv37cdcGbE8Y2gbdrO7eifTxh%2BYZcFVuDGzzDxBZP82EBa7yaYISLOaqATWPs2l7q8QZ0jKVbkWlkOi%2FQA3FCWOOZpG2eJ39UqmiDOkfe&X-Amz-Signature=a376aef7d34bb16e400796c0e5b24d7c77ee4220fb3d6a51662387626293c084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O2MCNSH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDiHDip23rDzy1culZr0itabe7rahkQU0NWlfE0nUN%2FDAiEAj3TfdfuuxscKbx%2FmeOnwXNSxNU%2FUt93JX9ComCde2egq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAZuon9taIZRrH3MwCrcA8LXQniscEpymMOIAxM%2BhsqItAU3B6CDRIC%2FneCjVPB5TvsoLjuZWqySBDOKqMJd5i8tIyER5Nnq%2Fz4Pt0hmFSYrm47gTunZOnoJzgG77sb6PiUFS0jdp3Cx17ulyZ07pZmpm54vytT445VntOjdnsdLFsl78EamTMxGLhGn5c3m7jNY4zR3aDrzvf2mpTByhdONANXgOP%2B1EFzg6Tpx9B%2B%2FApj4ZozupRsAWWpJHpvlOwPz9OuINThpD23mIRrZi9b%2BNZRzf0GdTqt6q7R9pOBtCgFHkrfzGPXSzgtm8oK9PATad03XItpGnFEWNO5FUz%2Fytsh%2B3AYjqVj%2B8b2A5kSkewm2nKtxkuamFIfugupvEkBODT1tayboWPAQFFRrqJ9AZ7LMWt0G5gWVaS2HSWHJsSYrK%2BdYeSg0lNvmcwpqItWknGUoXm26oqa8r2KuHTC84Mucq%2B2Ri6ybQEqYSDFkeC1tdMUuRXrwrmbO4Gau7b9mpwqmJaiclLTfWITLmsWhOXCCHc0vDZZY2eGto75iZ7jnzTIRBkj7IlwLGF4pEtl8PMyX0Yla%2B0DmsJe1dVxG%2BlZZOZ8A%2BlAc1xJ0Jv7xN2fRLaZ7axVEnrlqJnpso%2F65IJYbeFMI4FBMML7nxMkGOqUBSmDDu3F2Cj6ANz6oysid8889V2hYn%2BoNkHs9xxVVBY9PHAz9v%2BvsgjF%2BX5B5azXABoJ%2FKZGFAPdGpef6A1mCn1USuPcuJ1BV4d5a%2BjfOgO%2BJTVHnKMnRv37cdcGbE8Y2gbdrO7eifTxh%2BYZcFVuDGzzDxBZP82EBa7yaYISLOaqATWPs2l7q8QZ0jKVbkWlkOi%2FQA3FCWOOZpG2eJ39UqmiDOkfe&X-Amz-Signature=8b58dd8cbddec4b172510d6924b4dc10a927ef3a2f489b74596576bd3ffb5876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

