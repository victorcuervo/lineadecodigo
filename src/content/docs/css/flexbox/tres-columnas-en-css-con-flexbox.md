---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663L6TM5J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd9%2F16AED1l8w7Ic7erg4TglYpOwviXoUCHZxhds4UwQIhAInke6%2FgC%2FbYxI68jh%2F8hsMsOk%2BARfl0vazHhmMiINLVKv8DCHIQABoMNjM3NDIzMTgzODA1Igxy9%2B55hvcYqEnV8PQq3AMUAv7So8SVeN3Fh67f4CPuvqfQf5R1Huqgnn35DP3I2xYd25kobsCec%2BBJDI3RnsWYD2qm72tJA3TsnVrCimUmgaA%2FeA2TbKyWNAZewBiP8JRESM%2BHAQq3f8s%2B9XAtZpHWbz5laS%2BWV4tF0xgk%2BJCLH2WmWaUWBQk6zXANOFN1ODyvO2iXO9HJ%2FeyCQC0fiBRa3Swn6ULsxeJp68N47Es0JuFHn6NAW4jz2bb0%2FtRBe0LV5syxxbqH8uWzFgLYnFw0mK7AYSaPTWNhXjv%2BCBNQrz%2FxxJPUm7FPQ0f3Hs5uqGjRNWzEwXYurvWZmqQ1bQyIj3zK7K0WXqp%2F%2B9iTtYJK3vzTa2ey%2Bowo4Ze7JWxtvbCZMuKllc%2BYbeCoVhz8JuMzwriGJozTMUhjh5JZ834HCu9jGistWCFc%2FNrpWg%2BM7m6WNkNUsU%2FcGmCo8bhQ%2Fpnl3kYBL8d3DB51p46axOTkZ9ZJhlMMw3V1G%2BSZdCe9V31NFNbCN31R6mCD9YJhWmugDqHv0bji3En0tlnekBZ5Dc38%2BI7M7JmrjRRLvUpnlmps%2BNMMXKwATaUP10KG5fOxb42SoBQsxSjGIQ9%2BBPIFbd1Js%2BGF55OfMmXMPGGyJ4acLeS1vAkBJN4fijCX68%2FJBjqkAbdhgBHeUpYvIA20ZdlDn4ThQ7SCjIiruMpnl8F8jw5dWzq7bDVr4WUbNkM4%2BZ6huo%2Be3j66dcoks3Gc0UBhr2QgWXd3jvNJprTzgNq8k6%2Fi252EMOmqCJWmfDfZOI%2BsB%2FjPyjR2bVlLBAXr1YLBfy6G03y0G25Z1w2ONJfZzITIFTiTa2Rvv5a2aqfylIM2Dvv5SXLcefnZqpEt78rSlkLIMnY3&X-Amz-Signature=1d2523844a364cc5564f9bf05bd46d97bca444aea2d0abbd590114cb09ce6252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663L6TM5J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd9%2F16AED1l8w7Ic7erg4TglYpOwviXoUCHZxhds4UwQIhAInke6%2FgC%2FbYxI68jh%2F8hsMsOk%2BARfl0vazHhmMiINLVKv8DCHIQABoMNjM3NDIzMTgzODA1Igxy9%2B55hvcYqEnV8PQq3AMUAv7So8SVeN3Fh67f4CPuvqfQf5R1Huqgnn35DP3I2xYd25kobsCec%2BBJDI3RnsWYD2qm72tJA3TsnVrCimUmgaA%2FeA2TbKyWNAZewBiP8JRESM%2BHAQq3f8s%2B9XAtZpHWbz5laS%2BWV4tF0xgk%2BJCLH2WmWaUWBQk6zXANOFN1ODyvO2iXO9HJ%2FeyCQC0fiBRa3Swn6ULsxeJp68N47Es0JuFHn6NAW4jz2bb0%2FtRBe0LV5syxxbqH8uWzFgLYnFw0mK7AYSaPTWNhXjv%2BCBNQrz%2FxxJPUm7FPQ0f3Hs5uqGjRNWzEwXYurvWZmqQ1bQyIj3zK7K0WXqp%2F%2B9iTtYJK3vzTa2ey%2Bowo4Ze7JWxtvbCZMuKllc%2BYbeCoVhz8JuMzwriGJozTMUhjh5JZ834HCu9jGistWCFc%2FNrpWg%2BM7m6WNkNUsU%2FcGmCo8bhQ%2Fpnl3kYBL8d3DB51p46axOTkZ9ZJhlMMw3V1G%2BSZdCe9V31NFNbCN31R6mCD9YJhWmugDqHv0bji3En0tlnekBZ5Dc38%2BI7M7JmrjRRLvUpnlmps%2BNMMXKwATaUP10KG5fOxb42SoBQsxSjGIQ9%2BBPIFbd1Js%2BGF55OfMmXMPGGyJ4acLeS1vAkBJN4fijCX68%2FJBjqkAbdhgBHeUpYvIA20ZdlDn4ThQ7SCjIiruMpnl8F8jw5dWzq7bDVr4WUbNkM4%2BZ6huo%2Be3j66dcoks3Gc0UBhr2QgWXd3jvNJprTzgNq8k6%2Fi252EMOmqCJWmfDfZOI%2BsB%2FjPyjR2bVlLBAXr1YLBfy6G03y0G25Z1w2ONJfZzITIFTiTa2Rvv5a2aqfylIM2Dvv5SXLcefnZqpEt78rSlkLIMnY3&X-Amz-Signature=231f29df94850ecdb77c4ff13f15ddca9b6cf6a18f79ed2b8e14d088b4b5f998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

