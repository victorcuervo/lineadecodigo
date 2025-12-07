---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635FY6E3C%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T115014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbu2K7NyEAJ6GPOHpCrXkhXhno%2BCpnzRAC0PZtnROAmAiA7skIjLcnEj%2BX5QGOL0ZY0wpujKsQ%2FOFhOtbpcFWUHwCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM46rBDNJlbd%2FM4BGhKtwDsdyT09O9v5WuUKj9rT8E%2Bk5LTQejySDBxlcKCuXNVxv3hT2B9NTGYDXLlD5qa3MLrzzX80y5GK3Ls7mhTiBBO2yzjYafVYCf8URJyNMFwEuPHL4ERBbG4KQDVP9RtFyWshWSKTll689T3NAETqM14INlxEePKuXld20IKL6BfF%2FxjJThI5uCMrzH0lHPQIIBEGtPx%2Fyn15PAi3u5Zq1npD5SualcMoy6uDpvL2dn4DC1WXzFsB1J5w7jTAQrsnAwv7YsAmCLw8rLFXeY6uqzuPUO2p3lSnHajxdx04Ca516ZAd8sAjcreIwebuPLZ45UY9F9v%2Fr2nMEeB1sBJXUyQzVkp7IMMDs1IkjdoB1E06KfteOHtISipWXR7Q61DwykrkjXop4KGwlF65kEOCHNYgiocNSyymm9yhauWPjzzbin%2BvNZSg6KmwDvQoy%2FoeJR5sznkWu3RUNpxVbxp64Rg1i4r1lpeaiHjHB4%2Biac7tcksiLVznpZnonm6GOx%2FFgsnR7HfQicBOFkQNperD7BduDlLVKPYMa159mLWXoyIb%2F5hfo2oUOiINV3IMbrMQE77LAKzTfzgSLcYq5gd3YH23PFz%2F3vQMV9Erj8pum%2B%2F9HVOf%2BsnwvcGfeFZc4wp5rVyQY6pgGFf6assN1zPb5IgPM%2BbkAiYsXpHP2hMPpdEwlbv5kOkAG0H0cmQuV20EorZ6STUCLpjRU%2FoFQEOC0AM5i0TvSFhHTIGXtmrvUTn0wOtlFgNHHaArCSkcyNZ1vWOxgKjudsBuDLa18%2BsCT7TT13RTyLwO2i5ByA3N6VLTs2De3EBq%2BERx0fx4OcTkDHCX0U6auUunyTOMTtDct8V8%2BFgDc1NrkbLgDA&X-Amz-Signature=4f4709854bd28eb8cada1a3e5e85b0ff0c7e14c4a6f44bddb74055caaa557210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635FY6E3C%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T115014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbu2K7NyEAJ6GPOHpCrXkhXhno%2BCpnzRAC0PZtnROAmAiA7skIjLcnEj%2BX5QGOL0ZY0wpujKsQ%2FOFhOtbpcFWUHwCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM46rBDNJlbd%2FM4BGhKtwDsdyT09O9v5WuUKj9rT8E%2Bk5LTQejySDBxlcKCuXNVxv3hT2B9NTGYDXLlD5qa3MLrzzX80y5GK3Ls7mhTiBBO2yzjYafVYCf8URJyNMFwEuPHL4ERBbG4KQDVP9RtFyWshWSKTll689T3NAETqM14INlxEePKuXld20IKL6BfF%2FxjJThI5uCMrzH0lHPQIIBEGtPx%2Fyn15PAi3u5Zq1npD5SualcMoy6uDpvL2dn4DC1WXzFsB1J5w7jTAQrsnAwv7YsAmCLw8rLFXeY6uqzuPUO2p3lSnHajxdx04Ca516ZAd8sAjcreIwebuPLZ45UY9F9v%2Fr2nMEeB1sBJXUyQzVkp7IMMDs1IkjdoB1E06KfteOHtISipWXR7Q61DwykrkjXop4KGwlF65kEOCHNYgiocNSyymm9yhauWPjzzbin%2BvNZSg6KmwDvQoy%2FoeJR5sznkWu3RUNpxVbxp64Rg1i4r1lpeaiHjHB4%2Biac7tcksiLVznpZnonm6GOx%2FFgsnR7HfQicBOFkQNperD7BduDlLVKPYMa159mLWXoyIb%2F5hfo2oUOiINV3IMbrMQE77LAKzTfzgSLcYq5gd3YH23PFz%2F3vQMV9Erj8pum%2B%2F9HVOf%2BsnwvcGfeFZc4wp5rVyQY6pgGFf6assN1zPb5IgPM%2BbkAiYsXpHP2hMPpdEwlbv5kOkAG0H0cmQuV20EorZ6STUCLpjRU%2FoFQEOC0AM5i0TvSFhHTIGXtmrvUTn0wOtlFgNHHaArCSkcyNZ1vWOxgKjudsBuDLa18%2BsCT7TT13RTyLwO2i5ByA3N6VLTs2De3EBq%2BERx0fx4OcTkDHCX0U6auUunyTOMTtDct8V8%2BFgDc1NrkbLgDA&X-Amz-Signature=258e06120436bb9dfc5559a7e46063b005ff576a2e8054e1e9b66f6291dbdfc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

