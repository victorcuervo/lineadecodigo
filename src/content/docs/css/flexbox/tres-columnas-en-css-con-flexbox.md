---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466522ELPYV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCID%2FaFBTJlKP2cL%2BVzQoZ2BwvNzhO6kMVIv2f4zQyGRUNAiEAhlfp%2FOAmByo5wHPA3VONYzQw8%2Fty1PDT9BuInCwLK0Mq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKtLY70PuPoVIP3bdircA5uBk1xtP9%2FBJOGdbg29XJV2fN6PVDvZ7WPzh4qScnnP1Vsta%2BPwdEbtVCACxnbIo8KicUB2Qa7wm%2FhDtAvdgEVIRmUi%2BBRJHf5Tq%2Bp9l2g%2Bkpy4nuyT3OyHd5jHrmAgXqqA7sUymOZS1Hx%2FXPuLJHVZHH6MW8h1hyclaGRkZktEnY3incfPIDCDKY4vpQmcn63g9Rj%2FUhthKgD6UF9REkRFzE1XedMWyGOJJY2tYrNzxRsxgObJZaissTuLa1zanwcu%2FFEHlHNMN9v4O4dojIv0bSBPrTkJm%2FJURMnx%2BTymG2bpYKH%2B9%2FfkuArq8Fefe0AzxWKUL6jviDIQVOfVbJi9OSffeOFD8cyh0y3iN7XcL0wc%2FfwFeRBolrbR64OtLQSlGqe%2B%2FYdwz03tNpRF6OrChiWnLa%2FN7baUVugUhdEPOD%2FT2SavRBu4PY2wzxlHkkY8uqSieBP5G3QqP6Srl%2BqSuaBkZJOaJ5FCG8IGik9PjjwZdod08jpq68j99bOt2vll5wrik4GTUaIumzDRXd5E5ywZQVSOTCh5vCGCXYzyL3VekiremUm37Jc%2Fex50FaW%2BNGNgAmAVeCS8RTSH8SQvFQnepquKmY%2B%2BfKtJD%2F%2F2vyltlNarAPFm5Z0oMLTUw8kGOqUBLubOc%2FO%2FSspml8mWhL1wypsHgtie5oJbRTUlOkU3rPAehOHzPr%2FpIszurCGAkaYZqBY9IkzZkaH3mrqlcHRvvEVDUxPTihur%2FjkY%2BkVgh3pnq7UdENyYZlne%2B4MH%2Bbp2ANUnXJht9vwYLNBlpIcqApMzZYmXMkNBM7S%2FUdq5VKjZ3lGiNqyqnT1DzyEZId6EMIh3f5PAsH2qH%2BT9LbzYSFkiO15t&X-Amz-Signature=a992e4ab4957cd227e658537f68858e19d8bf63ab59b792bf8b3069f79ae326b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466522ELPYV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCID%2FaFBTJlKP2cL%2BVzQoZ2BwvNzhO6kMVIv2f4zQyGRUNAiEAhlfp%2FOAmByo5wHPA3VONYzQw8%2Fty1PDT9BuInCwLK0Mq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKtLY70PuPoVIP3bdircA5uBk1xtP9%2FBJOGdbg29XJV2fN6PVDvZ7WPzh4qScnnP1Vsta%2BPwdEbtVCACxnbIo8KicUB2Qa7wm%2FhDtAvdgEVIRmUi%2BBRJHf5Tq%2Bp9l2g%2Bkpy4nuyT3OyHd5jHrmAgXqqA7sUymOZS1Hx%2FXPuLJHVZHH6MW8h1hyclaGRkZktEnY3incfPIDCDKY4vpQmcn63g9Rj%2FUhthKgD6UF9REkRFzE1XedMWyGOJJY2tYrNzxRsxgObJZaissTuLa1zanwcu%2FFEHlHNMN9v4O4dojIv0bSBPrTkJm%2FJURMnx%2BTymG2bpYKH%2B9%2FfkuArq8Fefe0AzxWKUL6jviDIQVOfVbJi9OSffeOFD8cyh0y3iN7XcL0wc%2FfwFeRBolrbR64OtLQSlGqe%2B%2FYdwz03tNpRF6OrChiWnLa%2FN7baUVugUhdEPOD%2FT2SavRBu4PY2wzxlHkkY8uqSieBP5G3QqP6Srl%2BqSuaBkZJOaJ5FCG8IGik9PjjwZdod08jpq68j99bOt2vll5wrik4GTUaIumzDRXd5E5ywZQVSOTCh5vCGCXYzyL3VekiremUm37Jc%2Fex50FaW%2BNGNgAmAVeCS8RTSH8SQvFQnepquKmY%2B%2BfKtJD%2F%2F2vyltlNarAPFm5Z0oMLTUw8kGOqUBLubOc%2FO%2FSspml8mWhL1wypsHgtie5oJbRTUlOkU3rPAehOHzPr%2FpIszurCGAkaYZqBY9IkzZkaH3mrqlcHRvvEVDUxPTihur%2FjkY%2BkVgh3pnq7UdENyYZlne%2B4MH%2Bbp2ANUnXJht9vwYLNBlpIcqApMzZYmXMkNBM7S%2FUdq5VKjZ3lGiNqyqnT1DzyEZId6EMIh3f5PAsH2qH%2BT9LbzYSFkiO15t&X-Amz-Signature=86360b4d4a8364395f84fce4fb2b91f6f35c088625a5a70b434aca31d9c7b1b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

