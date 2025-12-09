---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VOW34T6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T083226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDehGsbEYyALIHluAOPbr4SIuYBzevtqifzyK5izhf5%2BQIhANGsEFjprO9MIJ2BnmrUsix4YM7%2BS7STLeJkHDKw2WtTKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhYX7gqPQZDN486Dsq3APuZwDdn%2Fzc5abd5XhSItlwDdXhxUbw8zOERiOWYM%2FHPmQBCDzm1TB9oR%2FRS%2B%2FhHAAgpCTSMOxLaAaTbvigRBqsbA1Nj9oYcP9Hq9tK5ca9OLL0FOuCtEulsd%2B1bkTlTRAHewMxUotwU6jAz6T6cGqJUlcfxyDYvVJiQTlHbjjVx1YMgOzQodOpaPZP0jLoFM3%2BLAFTYiebW7zZmYEM0qUrNb%2FmEWY5HkWAG3hVyl%2FSyBq16J7neul0yMbaKFiCxmgPK3Ymek2CGsQGVDsx8V5yOip1UXtX%2BN9kXjUXwJajfyRnjVuisd9KJLTjBQS16nyZ3hEwrcK%2F7rNeYh8jzLo1kFnrFpl76OvB5jto6EcY732CxkhZI%2BbTb3Jtcl1uZSn21vhV0G2dtED0ITklL44nDkkc%2Bf1ZHWAzZg1L%2BdKING1tKHGor7Ut38RKFdvMlT%2BBHUS%2B8fbG37AcZZikDeCHPHHFxVoFv%2FgXrvc1d4YWFdHU775EW3Y2XCysbSwCVtpLMiUwaHgLqLCy7CoFCpvew9Z4J54eBqwFcXs3KvX3G4rn1SPc0bbfQUth90DfBc%2BzQYmol95Ygu%2FF1SPH1RLlsWcTNPBJCERJqDWeyUYdY%2FRAQSHA%2Fg3l96Km5zC6pd%2FJBjqkAf8%2BtfOW7h5RID0EcTcWqneb%2BdJGs7Sr4uAUSwe3c%2Bj2b6g8TlFaJE3M4vKi%2B52C40AtgV4Zc%2Fv1HTAU4WKczJs95pTD9rdkoW5CogZVC0Vr6p0aXyZGdC6sMOnq74nYrF4xQIddayshbAmzSWALvOCmLPwY9aXA9GsM8BNFisJ2av0trss0ISRAHcwk1hn%2BBIQMJwB2HK2GMFi7q%2B%2FzNabllW8P&X-Amz-Signature=395136888bcde99aa51f5f49a58be160367f422f5c852309702412b5315652b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VOW34T6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T083226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDehGsbEYyALIHluAOPbr4SIuYBzevtqifzyK5izhf5%2BQIhANGsEFjprO9MIJ2BnmrUsix4YM7%2BS7STLeJkHDKw2WtTKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhYX7gqPQZDN486Dsq3APuZwDdn%2Fzc5abd5XhSItlwDdXhxUbw8zOERiOWYM%2FHPmQBCDzm1TB9oR%2FRS%2B%2FhHAAgpCTSMOxLaAaTbvigRBqsbA1Nj9oYcP9Hq9tK5ca9OLL0FOuCtEulsd%2B1bkTlTRAHewMxUotwU6jAz6T6cGqJUlcfxyDYvVJiQTlHbjjVx1YMgOzQodOpaPZP0jLoFM3%2BLAFTYiebW7zZmYEM0qUrNb%2FmEWY5HkWAG3hVyl%2FSyBq16J7neul0yMbaKFiCxmgPK3Ymek2CGsQGVDsx8V5yOip1UXtX%2BN9kXjUXwJajfyRnjVuisd9KJLTjBQS16nyZ3hEwrcK%2F7rNeYh8jzLo1kFnrFpl76OvB5jto6EcY732CxkhZI%2BbTb3Jtcl1uZSn21vhV0G2dtED0ITklL44nDkkc%2Bf1ZHWAzZg1L%2BdKING1tKHGor7Ut38RKFdvMlT%2BBHUS%2B8fbG37AcZZikDeCHPHHFxVoFv%2FgXrvc1d4YWFdHU775EW3Y2XCysbSwCVtpLMiUwaHgLqLCy7CoFCpvew9Z4J54eBqwFcXs3KvX3G4rn1SPc0bbfQUth90DfBc%2BzQYmol95Ygu%2FF1SPH1RLlsWcTNPBJCERJqDWeyUYdY%2FRAQSHA%2Fg3l96Km5zC6pd%2FJBjqkAf8%2BtfOW7h5RID0EcTcWqneb%2BdJGs7Sr4uAUSwe3c%2Bj2b6g8TlFaJE3M4vKi%2B52C40AtgV4Zc%2Fv1HTAU4WKczJs95pTD9rdkoW5CogZVC0Vr6p0aXyZGdC6sMOnq74nYrF4xQIddayshbAmzSWALvOCmLPwY9aXA9GsM8BNFisJ2av0trss0ISRAHcwk1hn%2BBIQMJwB2HK2GMFi7q%2B%2FzNabllW8P&X-Amz-Signature=627fc25db5a92af590b2d724a18122c60b3b720d24b0b5c6ce451d347cc31b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

