---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWVG7H6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPsWmQCxrrZmJdpFajzIb7rI0Cccv%2BSMufxsv7bf3dvgIhAJQmhfrnqOyj4x%2FSxszH%2F7kfCu%2BQ1%2B8UQo8H7nEqyXlpKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypwdcYLTvvX8pRSHIq3AOLUKv2OftV8qGStjcU%2BDYuxndzbGrliAxz%2FDcMS5smG6y7h0mhlR3ErK2aEXlPbg9bDL86AOFzU%2F5Zda4KcJ2qswV5c5NpiSwgNgVg2RM%2FhM%2Fmuq%2Fj0gAmvgEsBlic7lAkzU%2FY41I5OEf5LoRzMkrG4KNwfCRuCpVhjhzcX0cnuO43vzcoBUpRDPA3OVL7o3iKgt9D9oOKOhaBP%2Fd%2Brdz8pmcuP5eLJ%2FtUHJdCzAgbpxFuF%2BeqptpxHTISv1ORTVqRm8ioXW05CqyC8KT7FXlV6m2UdYDj%2BkfM7dkwB2VTeHpXJ4Q7r4eHbt4wmuiq3VgfC2J7bue0cP4lJtgt25v5EZa5HgylRrGX4uD1d0m42ARz4ec8ExDU42MMePh310kKmYQ6W3%2FTGiF%2BRsy%2Bv7IAHwdW4EnXno%2BAwJNygWqhsxvnhjPTkEK8Get9bZSq%2BtVZyFbdV%2Fye8O9OcHexExbMlSwD82zuLn2tAsOeDma%2FNP%2FfLQR2FWM4BwcpRBPCYlQ2T49TalbN1xKKdlCITFzRlbAeBLdLykKYhniAdep4t2Bqq1GXRq0%2FAB7119097zf7b%2BxLQN3hWcgJYWFd8YIpCiZG9R6PDBrBoGY3fJHOLKRMUo%2FvLEuI%2FEAzazC03NzJBjqkAaTBCtcZUMLLK3tdeyPcrJNUCGRQrEQ42HYtihqpPoESYDm2XUZca3wLexlVRKZ02x05JxrkN2%2B5lx8Sh6Bxc6DiSAiskz%2FqukUVRy3ja32VHpSqEQd6OvlfMVBPLXjHyzG1aqX1%2B66N9cXftHRSt7jnKGQYf0Ve19mPMQfVaaOas9RI567vw0xRcHLL1lXMqCcW3OfsZ%2FZMaeS%2F9Co7p6s%2B%2FzyG&X-Amz-Signature=194a2ba07c59580abfb4a0b803932087d4b6c6b066d38ca167f6a5c9c5040e41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWVG7H6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPsWmQCxrrZmJdpFajzIb7rI0Cccv%2BSMufxsv7bf3dvgIhAJQmhfrnqOyj4x%2FSxszH%2F7kfCu%2BQ1%2B8UQo8H7nEqyXlpKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypwdcYLTvvX8pRSHIq3AOLUKv2OftV8qGStjcU%2BDYuxndzbGrliAxz%2FDcMS5smG6y7h0mhlR3ErK2aEXlPbg9bDL86AOFzU%2F5Zda4KcJ2qswV5c5NpiSwgNgVg2RM%2FhM%2Fmuq%2Fj0gAmvgEsBlic7lAkzU%2FY41I5OEf5LoRzMkrG4KNwfCRuCpVhjhzcX0cnuO43vzcoBUpRDPA3OVL7o3iKgt9D9oOKOhaBP%2Fd%2Brdz8pmcuP5eLJ%2FtUHJdCzAgbpxFuF%2BeqptpxHTISv1ORTVqRm8ioXW05CqyC8KT7FXlV6m2UdYDj%2BkfM7dkwB2VTeHpXJ4Q7r4eHbt4wmuiq3VgfC2J7bue0cP4lJtgt25v5EZa5HgylRrGX4uD1d0m42ARz4ec8ExDU42MMePh310kKmYQ6W3%2FTGiF%2BRsy%2Bv7IAHwdW4EnXno%2BAwJNygWqhsxvnhjPTkEK8Get9bZSq%2BtVZyFbdV%2Fye8O9OcHexExbMlSwD82zuLn2tAsOeDma%2FNP%2FfLQR2FWM4BwcpRBPCYlQ2T49TalbN1xKKdlCITFzRlbAeBLdLykKYhniAdep4t2Bqq1GXRq0%2FAB7119097zf7b%2BxLQN3hWcgJYWFd8YIpCiZG9R6PDBrBoGY3fJHOLKRMUo%2FvLEuI%2FEAzazC03NzJBjqkAaTBCtcZUMLLK3tdeyPcrJNUCGRQrEQ42HYtihqpPoESYDm2XUZca3wLexlVRKZ02x05JxrkN2%2B5lx8Sh6Bxc6DiSAiskz%2FqukUVRy3ja32VHpSqEQd6OvlfMVBPLXjHyzG1aqX1%2B66N9cXftHRSt7jnKGQYf0Ve19mPMQfVaaOas9RI567vw0xRcHLL1lXMqCcW3OfsZ%2FZMaeS%2F9Co7p6s%2B%2FzyG&X-Amz-Signature=8ee2ca461220a16cdc55cc0565cfd5eb4203aa0528380f421f511d6a4490188b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

