---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3QU3QUE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq8PF5uenwji0kzGw5oNyu3Loh2l9DVFwmKo7HNhhXUQIhAIrX%2BlVjfeMJ4wCHnNHKcRSKvti80F%2FwvrqFAWd9GVgiKv8DCE8QABoMNjM3NDIzMTgzODA1IgzMgE36LXCaqEa9XAAq3AOp1R6jXf44oIYCSfusCf99cHCgd1U3NDQv2qkU7cydFu2pcWKIMNkGFrbrg8bzfk%2Famy5dHwuHf%2FEj%2B2kPbuDc9CZZUkuNSENafESYWmq1%2FRiX%2BzRmpl6KOGgV0A2Mw7YzfmVYMXGckRxAahiUT26WXn3JdQiYeHQjFT8CEcputkbLImA6NCyrDrSyPw2st4AZFE9qLbbirCTR16qW0tOV6yF2LKc2YZTLfeUiTnOuAms%2BJief1fKRQahxTF5WjCsnAcKbepzwZ7Rr%2FB3%2FMgmaQs5NMRWOeuSzNfaN8bU5n%2F3OLxDEinZHZ%2F%2FWU1P99RuEXY7wY%2B%2FTDrL9l8ZWOLXXKf6wfzEW2fXK7vUxP%2BQ2BqNTHDjLyNMU4mdtfBqKK5%2FHXAK8ZClW3MgXsw5s%2BTfo8HbGJW1ayTdwaLCy9qOkXJFLU9WxL0O1crlYwyGEoOPk90271%2BpaydGtE86JoWZ3g8UODauQJ%2FYDEKPcPzPJ1yP3F%2Bqx593KPd9e6O%2F9NWPWAuPoNDvGoNkUNLj%2BGwOryFoBoumry7foZbwkUrpjfL72x%2Be%2FGGhn5RnPamzlbRdpCbbOM8ejAlQbKjWjBCcA5NfCcx0NnAz4pcOc2q6ypHuIaQJDlxxulJN4sDCyjMjJBjqkAQ%2FnZYBGYT6DqZzvV1AXvjftDouOCRInTlqd6BQprKWVSTvQkkhasWa2NHR3b0YYqmPdQZVNTkeRL2rR4evJ18OyIeD8LmiytwIXH%2B4bsOcXQthkyyByEl%2BPgeIKNYjg1N%2BNpBAtKRQKuMp8MT3hLjKuSRGiTiy1wIytFLEkozFaz5ilY3qfHCi9WWcAt1OXZqkx3xk0nUX4AkDpeYU0hp%2BWObP4&X-Amz-Signature=80bfe49c46389299e976eee7f9c62ea2d3f2c61cd6eb26de2c0bb4279371d405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3QU3QUE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq8PF5uenwji0kzGw5oNyu3Loh2l9DVFwmKo7HNhhXUQIhAIrX%2BlVjfeMJ4wCHnNHKcRSKvti80F%2FwvrqFAWd9GVgiKv8DCE8QABoMNjM3NDIzMTgzODA1IgzMgE36LXCaqEa9XAAq3AOp1R6jXf44oIYCSfusCf99cHCgd1U3NDQv2qkU7cydFu2pcWKIMNkGFrbrg8bzfk%2Famy5dHwuHf%2FEj%2B2kPbuDc9CZZUkuNSENafESYWmq1%2FRiX%2BzRmpl6KOGgV0A2Mw7YzfmVYMXGckRxAahiUT26WXn3JdQiYeHQjFT8CEcputkbLImA6NCyrDrSyPw2st4AZFE9qLbbirCTR16qW0tOV6yF2LKc2YZTLfeUiTnOuAms%2BJief1fKRQahxTF5WjCsnAcKbepzwZ7Rr%2FB3%2FMgmaQs5NMRWOeuSzNfaN8bU5n%2F3OLxDEinZHZ%2F%2FWU1P99RuEXY7wY%2B%2FTDrL9l8ZWOLXXKf6wfzEW2fXK7vUxP%2BQ2BqNTHDjLyNMU4mdtfBqKK5%2FHXAK8ZClW3MgXsw5s%2BTfo8HbGJW1ayTdwaLCy9qOkXJFLU9WxL0O1crlYwyGEoOPk90271%2BpaydGtE86JoWZ3g8UODauQJ%2FYDEKPcPzPJ1yP3F%2Bqx593KPd9e6O%2F9NWPWAuPoNDvGoNkUNLj%2BGwOryFoBoumry7foZbwkUrpjfL72x%2Be%2FGGhn5RnPamzlbRdpCbbOM8ejAlQbKjWjBCcA5NfCcx0NnAz4pcOc2q6ypHuIaQJDlxxulJN4sDCyjMjJBjqkAQ%2FnZYBGYT6DqZzvV1AXvjftDouOCRInTlqd6BQprKWVSTvQkkhasWa2NHR3b0YYqmPdQZVNTkeRL2rR4evJ18OyIeD8LmiytwIXH%2B4bsOcXQthkyyByEl%2BPgeIKNYjg1N%2BNpBAtKRQKuMp8MT3hLjKuSRGiTiy1wIytFLEkozFaz5ilY3qfHCi9WWcAt1OXZqkx3xk0nUX4AkDpeYU0hp%2BWObP4&X-Amz-Signature=c7dbf5486811aaeac01b9b48293976c1ac275280a8a8e95c70a40b1d03e1ef7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

