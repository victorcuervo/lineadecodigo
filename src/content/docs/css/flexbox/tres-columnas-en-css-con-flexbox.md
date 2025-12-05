---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFCVF6F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfL0pBXqTKPn6jNxE%2BITnk%2BV5jpk1iVqvVnaGG3KLvqAIgCiXgW2B5KamZIi%2BYnrxR8sSpjv36DkxCEgHMRRifJdkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNLnxZ1RlVt3eoNf4yrcAzI4W%2FntO9Kgg3mJI28gTOlW5iMutwdJFKmtEuis4Y1RUiJIe6lpEwxWza6tcR5q%2FiSw14LsWIKVx2QByhGaW7ld6n7rDHMgNcA76urMqAhJhkF34PEjNBnh8%2FIpNZAQJJrfgU8hGb2x08sjnjeg9N%2Fgz3mBbq5%2FhezOUaCjhN%2BXVqtLbTqnObMj0obnYmUm20w43G5Ypfs7Hh38v5Sx0PpZViHtT%2FzraW3Ynii6oxn5P1tixL%2F%2FSqfbHP7FtYCvDQAZRuqneE%2BqxBxQmqjPa8wiJ7WEB%2B%2FEshwgIbSBe%2FIfWzJ0wgNzsrtL5qZzIweIGUTmWQ5l1bFFYilb1sJli%2B2sVvkJ%2B1SP18ThvH2l4dewVzgCG5QiDEIIElLqe2Htua9eJ6iUrl5L1au3rLBPzvurQCOgNxn5iVWQSURQaBveivtCzV1F%2BFcf3JvZefTLfOWCcDwiCEPmFs93jeRzB699UErprnwITgMW1l4Bu9D45v2Gbgsn7ID6Chj0lvAcprinVKIVGbzVA4wMKg0THLFan2QvhxG%2FAPWfV%2Burw0APbRYT9vtPd%2F4IQWyocuJU96lkrAT1OyxkBKpy8yD0lxmc7%2Bd9w5V1tBzhjwdX68lrRGJFncg1GQZjU51RMImMyMkGOqUBNdMfaOdGxV8QNJOdok%2F25LR%2FaHGAiSqDFSTbxiMzNmBKz7uIOrjIUFR7etKz5brNV6W2HQtyVtTpmjdChz4hL%2F185deA%2Fup5pN2aWMsU42xB9ZSojsa1RnF1aOKHUv3%2Bh96CTI6Iqx8fv01J8yAQGwrr%2F5IXZQNU%2BXNsu5WE5WkE6PON3T5ozQegZX79Fl72fYiMPGX7YvNA8yOo7hZKvC%2BOtJio&X-Amz-Signature=125ff35653d26366ee6c2b2b73b7d81bf17ffb406af5771d5313b192e7efa749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFCVF6F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfL0pBXqTKPn6jNxE%2BITnk%2BV5jpk1iVqvVnaGG3KLvqAIgCiXgW2B5KamZIi%2BYnrxR8sSpjv36DkxCEgHMRRifJdkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNLnxZ1RlVt3eoNf4yrcAzI4W%2FntO9Kgg3mJI28gTOlW5iMutwdJFKmtEuis4Y1RUiJIe6lpEwxWza6tcR5q%2FiSw14LsWIKVx2QByhGaW7ld6n7rDHMgNcA76urMqAhJhkF34PEjNBnh8%2FIpNZAQJJrfgU8hGb2x08sjnjeg9N%2Fgz3mBbq5%2FhezOUaCjhN%2BXVqtLbTqnObMj0obnYmUm20w43G5Ypfs7Hh38v5Sx0PpZViHtT%2FzraW3Ynii6oxn5P1tixL%2F%2FSqfbHP7FtYCvDQAZRuqneE%2BqxBxQmqjPa8wiJ7WEB%2B%2FEshwgIbSBe%2FIfWzJ0wgNzsrtL5qZzIweIGUTmWQ5l1bFFYilb1sJli%2B2sVvkJ%2B1SP18ThvH2l4dewVzgCG5QiDEIIElLqe2Htua9eJ6iUrl5L1au3rLBPzvurQCOgNxn5iVWQSURQaBveivtCzV1F%2BFcf3JvZefTLfOWCcDwiCEPmFs93jeRzB699UErprnwITgMW1l4Bu9D45v2Gbgsn7ID6Chj0lvAcprinVKIVGbzVA4wMKg0THLFan2QvhxG%2FAPWfV%2Burw0APbRYT9vtPd%2F4IQWyocuJU96lkrAT1OyxkBKpy8yD0lxmc7%2Bd9w5V1tBzhjwdX68lrRGJFncg1GQZjU51RMImMyMkGOqUBNdMfaOdGxV8QNJOdok%2F25LR%2FaHGAiSqDFSTbxiMzNmBKz7uIOrjIUFR7etKz5brNV6W2HQtyVtTpmjdChz4hL%2F185deA%2Fup5pN2aWMsU42xB9ZSojsa1RnF1aOKHUv3%2Bh96CTI6Iqx8fv01J8yAQGwrr%2F5IXZQNU%2BXNsu5WE5WkE6PON3T5ozQegZX79Fl72fYiMPGX7YvNA8yOo7hZKvC%2BOtJio&X-Amz-Signature=876a33c74db33e1489e17e9934fda028f1ada5bd2438db338a43295c560c2fae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

