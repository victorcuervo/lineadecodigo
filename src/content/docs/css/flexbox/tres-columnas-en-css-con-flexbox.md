---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TS7MYXY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T082836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4heDt6kMw4Lajys8b241TnrEabavcaPgN5iotskhq9wIgMoKvxtov2j2WM2uM4P2jhD8rYYUiWz1H6%2Ffsb72KOQ4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoYVMgb0fHfwyQiISrcA63L7KPOda4cngQTS%2B3A6lMHXPFfseBJl8Aj20sQzcjGQ8u%2FIpVxt7l5Eyx74AvY802sMUSWz7EANEo18RLPl8tKcKEuOyIwXLZit%2FPrqKihIsNJN%2FmTT1IoypsoNhZgIusZn37eVH3UZygW9UJ4gBoIwh8alxP8Y43p16vAhN0Nz4ed6CmMHHYgPVqANlDyKfirHgL8UDSvHOdTeGKXd3ygNQHvwsaCPrvDhE9O%2FvSvpu%2FP%2BHZNp%2BIzeHFAoja5sGY5scoGo%2ByN4TxUAOpSou8iLo8y2JNuqs57TMT0P625yd0nMS%2Bq5Q82JoiCvzaSaomFKFiTeW0rGpyrrL4mN0FIsK6VnbXkP%2BWuCh9sr%2B8OougvxgdZKFF46bGJjxeibSfGxFAXo600r1l2rJ0eJvAXOyktkHh5CBKkVpT%2BGGdkTQdSIrR6Ra%2BHLz0yYpO810JEK1vxe%2Fdm%2F5kjzV%2FchkWRdmu4d2CoM1C2y9HyDiDnxyn0GJwSIA8anaWKd74z9ue3UhaStHKMC6sV0S9B%2FClULA5LsAwudTDkRVfH%2BcnmwSoqcj4%2FDRbF7YKqR5Nsx8iM0fVYz4c%2BdXDN119MA8qS206LJA1Gknxe3Tq1qloPdTGTTq0BxMDpmeYrMILu2ckGOqUBIo2pBr87BYd1CHL8wIz%2F5Mi%2Bk4Nmh%2BNguHp0f8UJtpLjQH5rzY5yMe2oS%2FZU%2Bx7Q5q7h%2B9ldvDafxS32ohNW8vmGsiOcMCi0FpqNn9YdaY%2Byh%2Fu8kLAxplQCPM62cryChH5zpbpoC%2BNIxRR63NVLIWmwI%2BqVg9X0Nd1hs0J%2FqFa1HfcLYZacPtRvpgqDYgywVWj0r0ZflaBJ7SYyp9h5im9vtVDb&X-Amz-Signature=9931791e1b8ec2cdf3327cc154994958a024a9f1cd535273ef4e781dc0d901a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TS7MYXY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T082836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4heDt6kMw4Lajys8b241TnrEabavcaPgN5iotskhq9wIgMoKvxtov2j2WM2uM4P2jhD8rYYUiWz1H6%2Ffsb72KOQ4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoYVMgb0fHfwyQiISrcA63L7KPOda4cngQTS%2B3A6lMHXPFfseBJl8Aj20sQzcjGQ8u%2FIpVxt7l5Eyx74AvY802sMUSWz7EANEo18RLPl8tKcKEuOyIwXLZit%2FPrqKihIsNJN%2FmTT1IoypsoNhZgIusZn37eVH3UZygW9UJ4gBoIwh8alxP8Y43p16vAhN0Nz4ed6CmMHHYgPVqANlDyKfirHgL8UDSvHOdTeGKXd3ygNQHvwsaCPrvDhE9O%2FvSvpu%2FP%2BHZNp%2BIzeHFAoja5sGY5scoGo%2ByN4TxUAOpSou8iLo8y2JNuqs57TMT0P625yd0nMS%2Bq5Q82JoiCvzaSaomFKFiTeW0rGpyrrL4mN0FIsK6VnbXkP%2BWuCh9sr%2B8OougvxgdZKFF46bGJjxeibSfGxFAXo600r1l2rJ0eJvAXOyktkHh5CBKkVpT%2BGGdkTQdSIrR6Ra%2BHLz0yYpO810JEK1vxe%2Fdm%2F5kjzV%2FchkWRdmu4d2CoM1C2y9HyDiDnxyn0GJwSIA8anaWKd74z9ue3UhaStHKMC6sV0S9B%2FClULA5LsAwudTDkRVfH%2BcnmwSoqcj4%2FDRbF7YKqR5Nsx8iM0fVYz4c%2BdXDN119MA8qS206LJA1Gknxe3Tq1qloPdTGTTq0BxMDpmeYrMILu2ckGOqUBIo2pBr87BYd1CHL8wIz%2F5Mi%2Bk4Nmh%2BNguHp0f8UJtpLjQH5rzY5yMe2oS%2FZU%2Bx7Q5q7h%2B9ldvDafxS32ohNW8vmGsiOcMCi0FpqNn9YdaY%2Byh%2Fu8kLAxplQCPM62cryChH5zpbpoC%2BNIxRR63NVLIWmwI%2BqVg9X0Nd1hs0J%2FqFa1HfcLYZacPtRvpgqDYgywVWj0r0ZflaBJ7SYyp9h5im9vtVDb&X-Amz-Signature=98327d02dd170d8364b8dfb94d746a77c5eb7e8cc11108ef1039340ae9fe38be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

