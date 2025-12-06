---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AOXXTX7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAW3%2FYDhHFxxmgWn84CLwXRHn1SNjr%2F490UB3En08UhAiA9RwG0T97upCwCOWA3xUTwHj6qP7ylUP5SlPDXhWzJmSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMVbjMyLoxaFME2cpyKtwDlgTgbg9cxpnxvO%2F0xpXjDsUx3MMgQVyf%2BcPyBu7hEiagB1%2BadOFgxhpbRk0vXAKRzPEqkE0%2BqreGgtTzMCo%2B0If1MRjnnrrCfBuLQte8mjpqqpnr37JWNAb%2BvOJBNQC4aVg%2FFrqmO7zxiwOto59SVSEveCf7StIk9VuVqCZCtJvV0r1WNO5kDl8T07X%2B%2Bi3bJf%2Bh6Ry66YOpDyaCXnBHE1iCNNKjeSlSJ5p9XQefkDa%2B3l3YBeeBCxgKp0GOVYLS2ROh3gj19ll63txswA%2FoWpkIJAfpiMA4VK3WDHuwu6TPUBXIwOxqotmiehexHN1qA4tiHafGYaTfI8iXV%2FNHEGTBloaIlbEj7uTieZRcs2Z7TQSNA%2BbOdQhB74QRtu0FkKRQD4xZVQbqvmHpDq4DmMSks3VN5ylMP6huS%2FT5V2zU6eFZOjAE6NZLEODM2fM1%2BBX1eJsSa%2Fq5tXKrYdKIaJNspX5xeznfdrz901jHGmiKcH%2Ff3FAQFPOYd3jwM9DwXdCvfXsGyK2GsvMYmomORPRLMTJ1lLX7%2BBGTjuDlCpv4MHtL8Y2%2Bqdde64T4q9cEvPw2hgroMQjPGUVRNocJVxMPBZf%2BW45RFRCYY%2FuJriWfMmYyRPg8R7TibwAw5rzPyQY6pgEv3NuQiDAY9yu2e6gkih1pvVn1z6mWAz0241MpKX4xVSvKpK4Iv%2BXOJ6tvSMqzAhaHuuHBiHvjEzlMsQSRCDkanCVglcs%2B0DjgxUL7DRdR6tiHCa4YaeqwZslzgIDQQE%2FaxRCRXYlexB%2FPqEy4niCsmZKuHxbaiZ3nlXZINpYRI%2FBPee3pFuyoZ1fJcHJVq5vA0eT6GbYOT5b%2Fs9qrT2XVIUIwPIzE&X-Amz-Signature=1e2a9c672545f4c6a765b5262032f48c1d198a771a58ff4ee988aaa7d5705b93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AOXXTX7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAW3%2FYDhHFxxmgWn84CLwXRHn1SNjr%2F490UB3En08UhAiA9RwG0T97upCwCOWA3xUTwHj6qP7ylUP5SlPDXhWzJmSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMVbjMyLoxaFME2cpyKtwDlgTgbg9cxpnxvO%2F0xpXjDsUx3MMgQVyf%2BcPyBu7hEiagB1%2BadOFgxhpbRk0vXAKRzPEqkE0%2BqreGgtTzMCo%2B0If1MRjnnrrCfBuLQte8mjpqqpnr37JWNAb%2BvOJBNQC4aVg%2FFrqmO7zxiwOto59SVSEveCf7StIk9VuVqCZCtJvV0r1WNO5kDl8T07X%2B%2Bi3bJf%2Bh6Ry66YOpDyaCXnBHE1iCNNKjeSlSJ5p9XQefkDa%2B3l3YBeeBCxgKp0GOVYLS2ROh3gj19ll63txswA%2FoWpkIJAfpiMA4VK3WDHuwu6TPUBXIwOxqotmiehexHN1qA4tiHafGYaTfI8iXV%2FNHEGTBloaIlbEj7uTieZRcs2Z7TQSNA%2BbOdQhB74QRtu0FkKRQD4xZVQbqvmHpDq4DmMSks3VN5ylMP6huS%2FT5V2zU6eFZOjAE6NZLEODM2fM1%2BBX1eJsSa%2Fq5tXKrYdKIaJNspX5xeznfdrz901jHGmiKcH%2Ff3FAQFPOYd3jwM9DwXdCvfXsGyK2GsvMYmomORPRLMTJ1lLX7%2BBGTjuDlCpv4MHtL8Y2%2Bqdde64T4q9cEvPw2hgroMQjPGUVRNocJVxMPBZf%2BW45RFRCYY%2FuJriWfMmYyRPg8R7TibwAw5rzPyQY6pgEv3NuQiDAY9yu2e6gkih1pvVn1z6mWAz0241MpKX4xVSvKpK4Iv%2BXOJ6tvSMqzAhaHuuHBiHvjEzlMsQSRCDkanCVglcs%2B0DjgxUL7DRdR6tiHCa4YaeqwZslzgIDQQE%2FaxRCRXYlexB%2FPqEy4niCsmZKuHxbaiZ3nlXZINpYRI%2FBPee3pFuyoZ1fJcHJVq5vA0eT6GbYOT5b%2Fs9qrT2XVIUIwPIzE&X-Amz-Signature=d499a9e592bebadb5519a8d9f1919cb99755045949d584833b9d8a87ce8e48f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

