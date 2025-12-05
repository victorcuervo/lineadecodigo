---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FW7ONPD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcinZz9KrPRuL3tbLnVyj2yvB6YjXP9yFq25szxJd6CAiEAoDrY5RPkHY5eLz1QJVvfsKI1l0gfknT%2B6kFt1ly5k5Uq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDE8n6HOTuL25cuLROSrcA1c8W1KhiQAFNgFjap7TSVG9%2FoxCvHObB167IuHZQ5LOrywcUzM4BnWYRXsB08U4fhNJkkyH%2B8qXaUlFcaFdb10ntGSG51Zp1bkJKK4lLwEsifwcHKApHyVZmmOF3IkPg59ZZagfilkfn5WdQg56CKdx0FRmlQbKRMgYRaiUj%2B1nM0LxWQnKEK4S7oRIJbEIA25lTexX%2BDlE9MoxTHt7jqYcY3Qry95QDXQn80pIt9ulDWchO2rlC2Uj7YmVr%2FtLBs3mlzsvVC07d%2BmTm1SL41%2FXALwbnGUgp3lJ9jcUUFe9En6q88KaWQnLyhfq7V14dN0ivFFBaOZ1UPtGqGM7YUSNkBMMTPxEH9iID51S2IXUG%2Fc4bgbeSzu31FORGmDoTV%2BZ7RV%2F7J0dxKEA6HWj6w2ReAE0rggIfEd%2BpxlSG8OCjjcyFudNQJbRRPOf%2BDBDEj0gveDwAgovF01mHv%2B%2BK%2BejINosu6HwLL2frwT%2BrWw2njEJ6NkSxuq3Np8qxBVROa3NxrHH%2F8E64a%2FtxROWizFEHAqmuzdYHjsSCzXzeDAKdyonN%2FY%2FrULBQsv7Qp3WmtF1cbF2PTHomtpWiL4CuGddwMKzNB8CoLf%2BhRz2iORUowYKHrSsUSvsNde3MJOLzckGOqUBZ78P8Dz3BzzFoYjWrqCkhNV8SUbBWboF7vhtSAklWaQoJLnBZIot4d5DY4hHmVzl8uBKjgnkTi1CMBVKSE8W5hTkedk%2B88h4v8b4vBPzCkcb6gvQ1E8ZZ9EqRehj%2Bq2WuQvqRx2jd%2FWe82WafnZPUC03BLagTFmclc5tZB0MorFf4D56Y1TYsZ3XNVqZDBngHZETBRwklddxxW6dFo29N1HQWxR2&X-Amz-Signature=91c348742a7ad32d2798fb985c16a45fbaba49ca729a37dd70df2e349a912647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FW7ONPD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcinZz9KrPRuL3tbLnVyj2yvB6YjXP9yFq25szxJd6CAiEAoDrY5RPkHY5eLz1QJVvfsKI1l0gfknT%2B6kFt1ly5k5Uq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDE8n6HOTuL25cuLROSrcA1c8W1KhiQAFNgFjap7TSVG9%2FoxCvHObB167IuHZQ5LOrywcUzM4BnWYRXsB08U4fhNJkkyH%2B8qXaUlFcaFdb10ntGSG51Zp1bkJKK4lLwEsifwcHKApHyVZmmOF3IkPg59ZZagfilkfn5WdQg56CKdx0FRmlQbKRMgYRaiUj%2B1nM0LxWQnKEK4S7oRIJbEIA25lTexX%2BDlE9MoxTHt7jqYcY3Qry95QDXQn80pIt9ulDWchO2rlC2Uj7YmVr%2FtLBs3mlzsvVC07d%2BmTm1SL41%2FXALwbnGUgp3lJ9jcUUFe9En6q88KaWQnLyhfq7V14dN0ivFFBaOZ1UPtGqGM7YUSNkBMMTPxEH9iID51S2IXUG%2Fc4bgbeSzu31FORGmDoTV%2BZ7RV%2F7J0dxKEA6HWj6w2ReAE0rggIfEd%2BpxlSG8OCjjcyFudNQJbRRPOf%2BDBDEj0gveDwAgovF01mHv%2B%2BK%2BejINosu6HwLL2frwT%2BrWw2njEJ6NkSxuq3Np8qxBVROa3NxrHH%2F8E64a%2FtxROWizFEHAqmuzdYHjsSCzXzeDAKdyonN%2FY%2FrULBQsv7Qp3WmtF1cbF2PTHomtpWiL4CuGddwMKzNB8CoLf%2BhRz2iORUowYKHrSsUSvsNde3MJOLzckGOqUBZ78P8Dz3BzzFoYjWrqCkhNV8SUbBWboF7vhtSAklWaQoJLnBZIot4d5DY4hHmVzl8uBKjgnkTi1CMBVKSE8W5hTkedk%2B88h4v8b4vBPzCkcb6gvQ1E8ZZ9EqRehj%2Bq2WuQvqRx2jd%2FWe82WafnZPUC03BLagTFmclc5tZB0MorFf4D56Y1TYsZ3XNVqZDBngHZETBRwklddxxW6dFo29N1HQWxR2&X-Amz-Signature=82dd94b3a3e0d49c32c939562b10a26784e783830c882b8a48b3d5250d8d1549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

