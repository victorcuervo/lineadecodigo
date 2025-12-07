---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHPBUKOV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T105843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHwGQlqIGaH%2B9rPzGSSpodyNBMuKA5pDpOgWUERG8%2F0AiEApeFFlQRkTgKzH6VgtdfiX4d3mhOnXZYcTtckVBNk7yYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOj8M6DHXCAyCWZfircAywtYm5x9BdU9J3ySCchboVs8da7LrII93EcZwi93Bg7H9L7RX4yzFjqNoRGFkeulMr0T1nvSiOAqAlAjbaU5tTSs504sifkZZr2KO%2F1JcI1JtiCtNQBjwO41ROtHf4ljgz19NF6unehVyTlw5%2Bxdf1uqqxbPZgv54Uw625zb8F5rVdKKO4j9E9Fh810O6uEawkxPgNzJ4MA8Z7fF5jyumAjVZ8YJcrCrcUrOnaJtXnaN%2BPh3HJDZwaY1xOwnJZFzEG%2Fwt%2BVYBwj7qVcnyMSwCzxNvAPVXioD6WxQDLVpwt8JwOKLpREZjQJ4komo4IpvsexAtz20h77UM9JNASztwmfUGyLToM4nVcoHquq%2FwB6OFBOf573nhLYLEQ%2BklVjfwYinOIKmE8QkummlfLkzvIGMkcrLbWZRMuK%2BX9xD97Jf15KlwqOgm1LQQ36RxbRjz2ZuOKcI10KzaJaC1L4mcSwuhwSwJ%2FvqeMuh4%2F4nGgnrCLq6eIc02rYSb07upUXaNrE3sgB2W%2BGP6d9O7757CPe9yAs9OdaCndX4wmyqO1H9U2bn04ceftdzsP8CqbRkOHoyqDmpTk0eRkJqFVoWsSDbej2tbRThaLwhX2iclmNLXeFLQUj6wV%2BSLk3MMua1ckGOqUBOjHGcBLkLDcZzjLy4su0ctxKskudJroXq4gsmBRLIBzKZu77STEEpUfvPmJNWxHdAKpTFkBCd8fNdbYB%2BHTUskD9CI56xLtSpV55xT5J71oBCvIjS5KWdRsOgwZCITq1wGfEB8Te0%2FI3dvLwjyEwg8RinvAtXraBYLbd9uu9GX8XtCu6m3NnvclAXxginjob%2Fn0rg4BO%2BmOSf04R9pc2cHelMOGD&X-Amz-Signature=8dbc8a5a377663f2bd94edf1b9d507b699b6507d056420e3886d6f6bfad01560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHPBUKOV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T105843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHwGQlqIGaH%2B9rPzGSSpodyNBMuKA5pDpOgWUERG8%2F0AiEApeFFlQRkTgKzH6VgtdfiX4d3mhOnXZYcTtckVBNk7yYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOj8M6DHXCAyCWZfircAywtYm5x9BdU9J3ySCchboVs8da7LrII93EcZwi93Bg7H9L7RX4yzFjqNoRGFkeulMr0T1nvSiOAqAlAjbaU5tTSs504sifkZZr2KO%2F1JcI1JtiCtNQBjwO41ROtHf4ljgz19NF6unehVyTlw5%2Bxdf1uqqxbPZgv54Uw625zb8F5rVdKKO4j9E9Fh810O6uEawkxPgNzJ4MA8Z7fF5jyumAjVZ8YJcrCrcUrOnaJtXnaN%2BPh3HJDZwaY1xOwnJZFzEG%2Fwt%2BVYBwj7qVcnyMSwCzxNvAPVXioD6WxQDLVpwt8JwOKLpREZjQJ4komo4IpvsexAtz20h77UM9JNASztwmfUGyLToM4nVcoHquq%2FwB6OFBOf573nhLYLEQ%2BklVjfwYinOIKmE8QkummlfLkzvIGMkcrLbWZRMuK%2BX9xD97Jf15KlwqOgm1LQQ36RxbRjz2ZuOKcI10KzaJaC1L4mcSwuhwSwJ%2FvqeMuh4%2F4nGgnrCLq6eIc02rYSb07upUXaNrE3sgB2W%2BGP6d9O7757CPe9yAs9OdaCndX4wmyqO1H9U2bn04ceftdzsP8CqbRkOHoyqDmpTk0eRkJqFVoWsSDbej2tbRThaLwhX2iclmNLXeFLQUj6wV%2BSLk3MMua1ckGOqUBOjHGcBLkLDcZzjLy4su0ctxKskudJroXq4gsmBRLIBzKZu77STEEpUfvPmJNWxHdAKpTFkBCd8fNdbYB%2BHTUskD9CI56xLtSpV55xT5J71oBCvIjS5KWdRsOgwZCITq1wGfEB8Te0%2FI3dvLwjyEwg8RinvAtXraBYLbd9uu9GX8XtCu6m3NnvclAXxginjob%2Fn0rg4BO%2BmOSf04R9pc2cHelMOGD&X-Amz-Signature=9a25ce9fb76c5602fc3cf14aeae2ba278e700f0a279c28cdc463569decf082d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

