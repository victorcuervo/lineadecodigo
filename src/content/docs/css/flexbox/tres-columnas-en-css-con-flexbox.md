---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4LPLDHF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T193021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICy5PEeeKVmr%2FSLvGVWDBXlwRAVHyPqnrnevuqoD3zKhAiEA4DA8fC1lwjIQ3kN9pCAg2TeeM1BXh5Lgi0AjIcOvQ3Qq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDJY3tO%2F%2BVbh6YN4GoyrcA3PjGiNtMVc0nEwNuwWrrW1XQL9%2BNudnMzcR1FN%2FF3Z%2FYXa%2F6ufGc1yeYeTRfMw2ZaAqiFZPVsT6AG4igsJ7z2EvbG0flzbOJGoYEF6j%2F2lbAtkIQyB62ipa5AGbr9VUG7%2FYz3HFhJRAGj8YVrqVOh%2F4%2FrKohgKormTanFRC%2Fpf8oG%2FFLEvjakz4fWwK6UQhVEAbHyVOrjvMUR%2FRWxDSvtX2f1XSelg52KH%2BAb719uzzMEjahW4zC2ouys%2FVO74RSM%2F1MhgG3p6K%2FTLcncdhNVy95PyIKaKyq%2F5%2BhqoYRpZ9UD4TQdN31cNzxMAKHFY4b8k25ZGEdFeAFAKM2cziP8rrhfwylD1%2BWjaekuon%2BxK0uNtOZlgh3%2FYuWKB8kNfLQLLyc7cmovUXgTInoU0yNFB1SrwpMAeZlUZfvBbzP191pNDIvKwNhyHg7oJSBwOa9uEv9r0dyqRBFXGF%2FhWdZbrPv%2FdOUTRvTouGiCRy4yYVlipsT2617YZ3cqvJvmy7roo5lfgdY9rzB12FDxZryuprck%2FqkRJtlVLLQ7PdyuOEAHidOK5KKFY2fb7yXmB7rJQQ6c0hGcoBVgkd%2F0vONfOmYItgV06WB8yUsPdeXnrSoIffUmfI6tOErfDYMLjny8kGOqUBauCk58QW6bQExcmyRq8%2BdcWrogHp6h0mAh2yfcYKIqqUHyz99gu8VGx%2BWY5zthVDeyOxrbMG38%2FGVhvnELorkfYqevSEZgXioMUVYAFnsdkMT%2FsxqRiTnjzFQ1Of%2BxGidzlxZZld2x35RSzAyPsSMEbtg9zgwh4wX4b%2Funt6AYi0WHEwE%2FdSdmR%2B11phnHEiuJ8bciIhxb1A11jLW0OrRlPCg0hn&X-Amz-Signature=520ec00cd505018d84edfb17305e2faa2aaae70e2e1ed2b48d2b4e2817453d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4LPLDHF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T193021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICy5PEeeKVmr%2FSLvGVWDBXlwRAVHyPqnrnevuqoD3zKhAiEA4DA8fC1lwjIQ3kN9pCAg2TeeM1BXh5Lgi0AjIcOvQ3Qq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDJY3tO%2F%2BVbh6YN4GoyrcA3PjGiNtMVc0nEwNuwWrrW1XQL9%2BNudnMzcR1FN%2FF3Z%2FYXa%2F6ufGc1yeYeTRfMw2ZaAqiFZPVsT6AG4igsJ7z2EvbG0flzbOJGoYEF6j%2F2lbAtkIQyB62ipa5AGbr9VUG7%2FYz3HFhJRAGj8YVrqVOh%2F4%2FrKohgKormTanFRC%2Fpf8oG%2FFLEvjakz4fWwK6UQhVEAbHyVOrjvMUR%2FRWxDSvtX2f1XSelg52KH%2BAb719uzzMEjahW4zC2ouys%2FVO74RSM%2F1MhgG3p6K%2FTLcncdhNVy95PyIKaKyq%2F5%2BhqoYRpZ9UD4TQdN31cNzxMAKHFY4b8k25ZGEdFeAFAKM2cziP8rrhfwylD1%2BWjaekuon%2BxK0uNtOZlgh3%2FYuWKB8kNfLQLLyc7cmovUXgTInoU0yNFB1SrwpMAeZlUZfvBbzP191pNDIvKwNhyHg7oJSBwOa9uEv9r0dyqRBFXGF%2FhWdZbrPv%2FdOUTRvTouGiCRy4yYVlipsT2617YZ3cqvJvmy7roo5lfgdY9rzB12FDxZryuprck%2FqkRJtlVLLQ7PdyuOEAHidOK5KKFY2fb7yXmB7rJQQ6c0hGcoBVgkd%2F0vONfOmYItgV06WB8yUsPdeXnrSoIffUmfI6tOErfDYMLjny8kGOqUBauCk58QW6bQExcmyRq8%2BdcWrogHp6h0mAh2yfcYKIqqUHyz99gu8VGx%2BWY5zthVDeyOxrbMG38%2FGVhvnELorkfYqevSEZgXioMUVYAFnsdkMT%2FsxqRiTnjzFQ1Of%2BxGidzlxZZld2x35RSzAyPsSMEbtg9zgwh4wX4b%2Funt6AYi0WHEwE%2FdSdmR%2B11phnHEiuJ8bciIhxb1A11jLW0OrRlPCg0hn&X-Amz-Signature=4cd39e4e228347d32610a47d9f24923b90e2bff6891c4dc123e0388f7681ffbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

