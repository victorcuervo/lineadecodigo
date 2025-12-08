---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634GJDPQQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T154606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpcXFaHOQeMsGtD81K2xfQrqQfmjPHQRwwZ6xw3yS1bAiAx4kxmKuAI5W0aFt8ZWgt0LFvQtUHGP7LAMFtVSyLhICqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B7S3cY3zyoOeuZ72KtwDJdpXSN%2FWzAPwl4HTxuwBgffhxtluTNoG9NL74fqXUx0iPJFdKJJMcAXxZ06gKSrnpSlPSivHg3xb%2FTk4r%2FCwKPCopJvBJXB7flW3o3W4KwQPJEwkf%2BM1qaZtP8nZMnbbepGfbSBc74KbKf6MS5DJhGnmhOcKzFFP6b0HNZM01IBnplwtJhQ1NAWR60RHf0HTnm8%2BfXW4WXTSwe1VJ0zt8WSmYniHosQ58NZWLKkUX1SJPskTMXEIGcDPKf3L5MHKuqsrqNZZgR1HuLbIJVVrZGXLsV0GmCWwJp2PZtwIADRu2YUj%2BnHWC7gJCBqDay3kwf1kg8o%2FPQnyIm%2F7UBiblJo8Ol2yugM6xLQ4FGnhA48cr3khzkzeCIlLI5tlHkz4PTlkrCMQYD0GQVb4Qr8cUY88EwK9keLRrTbQG%2BfMFaiF0a4jN4OM92LaZyGhe1hxMk2MYNJ9y7DkhqIZV54nCr%2BsZ1g%2B95USsBkR8mQCKDngSLju%2ByZsh3Zc2ANc4Y9V1gzBo0ekHnJq6AIiq9eN62%2FDUcwgvlTWagFZsTlAK%2FkUZ4dO9Scy4jWAaPa1R1yzP4RFQB5FdGB8pWLb1liKNpWpGYiDVZqzX5u941ws6XN6VCUboNSpfCd%2Bn%2BQwtOTbyQY6pgEcsm7OQxOOwrU3%2B0nUpM44auYxdZ2y7Bg5%2Bsf1sBRRUWZxMAPfR6oSLchVC0jlN7b6nwwbs44FhehaDkMKyG6gh5J3qKDG%2FaIKr%2BNi0Oez3fT3cmEDKy45LZZW8ffM%2Fkqv11Xal%2FHSwaxZww%2BfzF6yKNVJYul7lFXsEwR5ZdMBemGnCsUMV8k7IJmnIlWaTdbArieVMdYGdP%2BiFK6kM5s9u%2Fz2z1vS&X-Amz-Signature=d0fc3f07ccfdfe68cf29f9d55ed42fc096b58779f4b2201fc1acae9496eed9b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634GJDPQQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T154606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpcXFaHOQeMsGtD81K2xfQrqQfmjPHQRwwZ6xw3yS1bAiAx4kxmKuAI5W0aFt8ZWgt0LFvQtUHGP7LAMFtVSyLhICqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B7S3cY3zyoOeuZ72KtwDJdpXSN%2FWzAPwl4HTxuwBgffhxtluTNoG9NL74fqXUx0iPJFdKJJMcAXxZ06gKSrnpSlPSivHg3xb%2FTk4r%2FCwKPCopJvBJXB7flW3o3W4KwQPJEwkf%2BM1qaZtP8nZMnbbepGfbSBc74KbKf6MS5DJhGnmhOcKzFFP6b0HNZM01IBnplwtJhQ1NAWR60RHf0HTnm8%2BfXW4WXTSwe1VJ0zt8WSmYniHosQ58NZWLKkUX1SJPskTMXEIGcDPKf3L5MHKuqsrqNZZgR1HuLbIJVVrZGXLsV0GmCWwJp2PZtwIADRu2YUj%2BnHWC7gJCBqDay3kwf1kg8o%2FPQnyIm%2F7UBiblJo8Ol2yugM6xLQ4FGnhA48cr3khzkzeCIlLI5tlHkz4PTlkrCMQYD0GQVb4Qr8cUY88EwK9keLRrTbQG%2BfMFaiF0a4jN4OM92LaZyGhe1hxMk2MYNJ9y7DkhqIZV54nCr%2BsZ1g%2B95USsBkR8mQCKDngSLju%2ByZsh3Zc2ANc4Y9V1gzBo0ekHnJq6AIiq9eN62%2FDUcwgvlTWagFZsTlAK%2FkUZ4dO9Scy4jWAaPa1R1yzP4RFQB5FdGB8pWLb1liKNpWpGYiDVZqzX5u941ws6XN6VCUboNSpfCd%2Bn%2BQwtOTbyQY6pgEcsm7OQxOOwrU3%2B0nUpM44auYxdZ2y7Bg5%2Bsf1sBRRUWZxMAPfR6oSLchVC0jlN7b6nwwbs44FhehaDkMKyG6gh5J3qKDG%2FaIKr%2BNi0Oez3fT3cmEDKy45LZZW8ffM%2Fkqv11Xal%2FHSwaxZww%2BfzF6yKNVJYul7lFXsEwR5ZdMBemGnCsUMV8k7IJmnIlWaTdbArieVMdYGdP%2BiFK6kM5s9u%2Fz2z1vS&X-Amz-Signature=a960088f3be4418865547891f323f479f4b865d933a31fa43d3515eac2f68fe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

