---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654Q3OTGV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZM5t8%2B9VHNF6k4HW90PD6XilN9zaFWhChu5iUHXl%2BXgIgfzBjdTaB4%2FWWAoi2YDvchcGPgfjbjUvJ%2FNNU%2FR%2B5hW8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPiLKt5eF107rtZBASrcA%2Boo7zLqLFMEV5rgseVPfgfr0dU7AlxyPpSx%2BhEeDn4VJTT7Wi33G5F8aZ6qoBimNI0dHcn0eckiXowpUncbz5HX4EvD88wuIPpl4Y3dFc1Ofi27WG7ucRI%2FrnFd1utqi9VAx0edYAKiUNMk0nxqeKV4h3SNluiSY%2BmCTj76BIzcuLaHEZSQ8gq%2B8cDhe6QqBzcVkahtVVz6HO9pyEcBMm0Vk4%2FBpLROmdzHl6IFiRf9vst5S%2BnY3ai0Fq9jgTZKKxU0I9f5tHGjJRP03WaUFlLR35%2BSIhfXuMxKvxnHi7ept0TfniY97mDAWNaN4npDycvw6rvGz4UJBmk4oD7TYmfCTXLFSJT2B9CIVXqwOXg8wM0nWRuKxhrUtRj9GVhlK48Nl%2B8mDZK9pb7zJEibaKgpAk21k%2B6wgatHzEHCS9pJSDjcCM%2BcigWHA%2FiCj25NBdHFtvgF0bm7r9XhL5y9TmdfK2NxPXLpgNKwNoOpXN3AYAbE1jmggvI30HY4r%2B0Q6ulUk3Jx6UUv95u8kWhjrec2Bqrjdw8n63QSmRatS0SGznoG1iOSwPmeHN%2Bkwj6CjxCbqc2qiVVwOBLmVG%2BD6tTC%2B%2B2ALYaJT25xOZ1t2%2BlO%2F4b0CaICpb6WG5koMJCPzckGOqUBzTUnSHvMSNFpc0t7J09bVN9PRSrlr0EFJHs4VAKitZLG0Cs8wpjgZAcOxA0K971PX%2FiDyx9TtQzxM%2BW%2BQik9VWZhoG2xDvaBR5DxfIaV38iK0kAjXnrtQ8kvAFPkkNS5jrlaYWOEnw6l5h0PkGKFjMW9pCuhyO9mOh3OcvvTEGVZHcnKGbs19mz1rX5qec6WYeroit%2BYMffO%2BOsMDUgCI7uKFDDW&X-Amz-Signature=38524a2474e6fcb72a56428fefdece2c579070384765358db6131aa61e19c970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654Q3OTGV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZM5t8%2B9VHNF6k4HW90PD6XilN9zaFWhChu5iUHXl%2BXgIgfzBjdTaB4%2FWWAoi2YDvchcGPgfjbjUvJ%2FNNU%2FR%2B5hW8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPiLKt5eF107rtZBASrcA%2Boo7zLqLFMEV5rgseVPfgfr0dU7AlxyPpSx%2BhEeDn4VJTT7Wi33G5F8aZ6qoBimNI0dHcn0eckiXowpUncbz5HX4EvD88wuIPpl4Y3dFc1Ofi27WG7ucRI%2FrnFd1utqi9VAx0edYAKiUNMk0nxqeKV4h3SNluiSY%2BmCTj76BIzcuLaHEZSQ8gq%2B8cDhe6QqBzcVkahtVVz6HO9pyEcBMm0Vk4%2FBpLROmdzHl6IFiRf9vst5S%2BnY3ai0Fq9jgTZKKxU0I9f5tHGjJRP03WaUFlLR35%2BSIhfXuMxKvxnHi7ept0TfniY97mDAWNaN4npDycvw6rvGz4UJBmk4oD7TYmfCTXLFSJT2B9CIVXqwOXg8wM0nWRuKxhrUtRj9GVhlK48Nl%2B8mDZK9pb7zJEibaKgpAk21k%2B6wgatHzEHCS9pJSDjcCM%2BcigWHA%2FiCj25NBdHFtvgF0bm7r9XhL5y9TmdfK2NxPXLpgNKwNoOpXN3AYAbE1jmggvI30HY4r%2B0Q6ulUk3Jx6UUv95u8kWhjrec2Bqrjdw8n63QSmRatS0SGznoG1iOSwPmeHN%2Bkwj6CjxCbqc2qiVVwOBLmVG%2BD6tTC%2B%2B2ALYaJT25xOZ1t2%2BlO%2F4b0CaICpb6WG5koMJCPzckGOqUBzTUnSHvMSNFpc0t7J09bVN9PRSrlr0EFJHs4VAKitZLG0Cs8wpjgZAcOxA0K971PX%2FiDyx9TtQzxM%2BW%2BQik9VWZhoG2xDvaBR5DxfIaV38iK0kAjXnrtQ8kvAFPkkNS5jrlaYWOEnw6l5h0PkGKFjMW9pCuhyO9mOh3OcvvTEGVZHcnKGbs19mz1rX5qec6WYeroit%2BYMffO%2BOsMDUgCI7uKFDDW&X-Amz-Signature=f2026d6d999789bd31c1a6e6b5679968449f026300f53a72edf09b0301b8044e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

