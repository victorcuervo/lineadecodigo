---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULKSC53U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPgEyEpRkcRyKCPew5%2F7xPQKEbWVtWH%2FGeZ2rr1g54RgIhAP%2B7ocrNNXdhs76LNfENwOSe5DhEjacM4u0KYNjoTCcxKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4g51l%2BvBet2fTTnUq3APywyL86YNkPZsIxKh7bkV%2ByaGRnc%2F8a2fGuTZaFoNQO85u%2Bw4OFjzehep%2F2IJdQDKUa9Ufe6aNHXbsUBrEMl4UDlQQT0gQcWVppuHTQkdheZKXHpnyfPinhNI9NizSEPFYqG2NGeHAwy46%2FeFgk%2F1s0tA4Fw6GVIPPwS1KeGB2%2B%2FhM8Q21OvaGmKSI23Rat9ImSHn%2BBG8yWhAlwTC7JhGW0%2BV6TK3CClVzbrHFnFP3OR71zW2PfHrJ6tBQx4EsGZmeG4oBk1wYRPgN3wIL8I1p5MAxFI9esUuBrG90rUf%2FHNzAL24CwPEf%2F%2B65bOPbjl5kJV2Rw1wDkxmchP6jaz4cPKLbxdEPexVIBMTWhr81vkbIM8uks2iSw%2Bek4jc8fFsAXTxFpXCtICHq0ws%2FJWu1vB5MknRqq8hnQawc85q%2FnOurptPMjaCOf1xZCOIQWcxBFNZIiQ%2FCZCX1rf8qGK7l1IBBLCPK%2FpmqQua3rJYt0UigQBaPCAiATc9RvMIn2vrL048JlBOV3kTTolY4txtd5YAgKdtvG9%2Fz0GQQM84qhnx%2Br2asCAvAH68YLHFkyIV25uem%2F9FNKMAdlOj0ihZ784CJRCQlcS8NUIKnuJjPcX7ubUe0r0xjMz0nQjD2hNjJBjqkARia19MlWgWZVX03rKP7w6zIgxxrRZ6Ovy53G4SRLC9ZWjRlrqUYXvrWk2ut6jSgSNGmwStaYcdujhLO9VijFEqqBPEXh6d%2B5%2FiAcu1ae3vGWEwUfYb02tOlIxyk0rnUIkqzffYo%2FxSxG4lKO4IXMUmfNVCYYQBpn73kL6WSwMTKkgfze8J8b6IRace%2BI%2ByxS0y0FIg0zNVbYsDYnpoIh1i8ksR0&X-Amz-Signature=1c61df1576dc0e16b0d9cf47c4ff99ec6c80c0a25b8d21159f981ef11a670d09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULKSC53U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPgEyEpRkcRyKCPew5%2F7xPQKEbWVtWH%2FGeZ2rr1g54RgIhAP%2B7ocrNNXdhs76LNfENwOSe5DhEjacM4u0KYNjoTCcxKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4g51l%2BvBet2fTTnUq3APywyL86YNkPZsIxKh7bkV%2ByaGRnc%2F8a2fGuTZaFoNQO85u%2Bw4OFjzehep%2F2IJdQDKUa9Ufe6aNHXbsUBrEMl4UDlQQT0gQcWVppuHTQkdheZKXHpnyfPinhNI9NizSEPFYqG2NGeHAwy46%2FeFgk%2F1s0tA4Fw6GVIPPwS1KeGB2%2B%2FhM8Q21OvaGmKSI23Rat9ImSHn%2BBG8yWhAlwTC7JhGW0%2BV6TK3CClVzbrHFnFP3OR71zW2PfHrJ6tBQx4EsGZmeG4oBk1wYRPgN3wIL8I1p5MAxFI9esUuBrG90rUf%2FHNzAL24CwPEf%2F%2B65bOPbjl5kJV2Rw1wDkxmchP6jaz4cPKLbxdEPexVIBMTWhr81vkbIM8uks2iSw%2Bek4jc8fFsAXTxFpXCtICHq0ws%2FJWu1vB5MknRqq8hnQawc85q%2FnOurptPMjaCOf1xZCOIQWcxBFNZIiQ%2FCZCX1rf8qGK7l1IBBLCPK%2FpmqQua3rJYt0UigQBaPCAiATc9RvMIn2vrL048JlBOV3kTTolY4txtd5YAgKdtvG9%2Fz0GQQM84qhnx%2Br2asCAvAH68YLHFkyIV25uem%2F9FNKMAdlOj0ihZ784CJRCQlcS8NUIKnuJjPcX7ubUe0r0xjMz0nQjD2hNjJBjqkARia19MlWgWZVX03rKP7w6zIgxxrRZ6Ovy53G4SRLC9ZWjRlrqUYXvrWk2ut6jSgSNGmwStaYcdujhLO9VijFEqqBPEXh6d%2B5%2FiAcu1ae3vGWEwUfYb02tOlIxyk0rnUIkqzffYo%2FxSxG4lKO4IXMUmfNVCYYQBpn73kL6WSwMTKkgfze8J8b6IRace%2BI%2ByxS0y0FIg0zNVbYsDYnpoIh1i8ksR0&X-Amz-Signature=068a6efa2f8aa74283103bbeda5414bc94937f38bcb399a3dfb2829645b513c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

