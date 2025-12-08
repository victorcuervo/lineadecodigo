---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRAXAL7U%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDaJyqb4xH5NepkB0oLXktD7W9qRZDG4e8j%2BhTvysbUGAiEA%2B6Xt2Wx6vQ5nbOjwA%2BsPmZVp9DT0S7p0cjTyT6bKsagqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC63gIRfmdPsRr2lcSrcA3H5MRcZVI1YNaznKknbxnJ8d54jex012Rr75511zvB8u6OwEU7itEzTIx35ZdFDJB7RiIH6SsoSwiQ716qO1kylUlsMTNYnY3S1LEgKhMTOYKAFg2GxmdnWWF%2FKEq%2BMcbOCKPV1iDAOZYi%2FPyjYlS6jV2OdcyE%2B2JIr7jjQKLHgwrT9PFL4H%2BhRHL42%2FeBwzP319Z6Css5%2BJmSNeZSAMxSTt7BF7GxaM3p2O%2ByBRlPxpJEXaGVlWQGXpp2zvEpxakyVKj9j40dAmPFOOLcUR5UK1mdldEyaCPmAtdO%2BeDCTWZCr2l3z9Y03eyei002W2JpVC97sylo2oKPfJ1JhKfoPTV88uSTY2xGQv%2FpHmlvP%2Bn%2Fo84cSl01G58JqaWF7XWi6W2aZrTckSskkGn9FgMjXsHy3%2BZSkzNVobOwUngdyhjjmohD7eT0PmMwciFUIIYn2DS2ejKvqAV91anHVYAXbUzihr3M4MFEc%2BfQxuM7cpBIDJe%2FS%2Bw3ZbafkZI%2BQW5RcFkiUJo4Y0R1VPMy3k1FhXkiLIGEZnm8skJESk2upFoCmjvN7QYtABE8wKvV2dPqdAOPUozWBcxjLd8kSSBeQa908kgvljInhPr6m21mpoL33VQJHRP1TgvcAMM6h2MkGOqUB4TD96LwBffPFBnvXOC4KbHy2W65Byq4ZGb0UBmaIaZ1Yx%2FMSDhU7Bl%2BFdXxazOQItPeiTKAh1oOES8jPC3qz2OR4YN08nF7X4Zqjcy7VWoOafHNf9UB1wyACY2R%2BQbAKKTpCs7aSk74mU1Zm8NifTa5sQNXhJV3yXOKDvY4Fk8Vd9OE5sNuJbXZHovfF6XncSCSr7qWDNFoeWfX39AFRo8w4QRwW&X-Amz-Signature=08b4254fa8c2f361a75e3991214f76a7e01cc5cbbfc6da0019c7b62a774ba34d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRAXAL7U%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDaJyqb4xH5NepkB0oLXktD7W9qRZDG4e8j%2BhTvysbUGAiEA%2B6Xt2Wx6vQ5nbOjwA%2BsPmZVp9DT0S7p0cjTyT6bKsagqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC63gIRfmdPsRr2lcSrcA3H5MRcZVI1YNaznKknbxnJ8d54jex012Rr75511zvB8u6OwEU7itEzTIx35ZdFDJB7RiIH6SsoSwiQ716qO1kylUlsMTNYnY3S1LEgKhMTOYKAFg2GxmdnWWF%2FKEq%2BMcbOCKPV1iDAOZYi%2FPyjYlS6jV2OdcyE%2B2JIr7jjQKLHgwrT9PFL4H%2BhRHL42%2FeBwzP319Z6Css5%2BJmSNeZSAMxSTt7BF7GxaM3p2O%2ByBRlPxpJEXaGVlWQGXpp2zvEpxakyVKj9j40dAmPFOOLcUR5UK1mdldEyaCPmAtdO%2BeDCTWZCr2l3z9Y03eyei002W2JpVC97sylo2oKPfJ1JhKfoPTV88uSTY2xGQv%2FpHmlvP%2Bn%2Fo84cSl01G58JqaWF7XWi6W2aZrTckSskkGn9FgMjXsHy3%2BZSkzNVobOwUngdyhjjmohD7eT0PmMwciFUIIYn2DS2ejKvqAV91anHVYAXbUzihr3M4MFEc%2BfQxuM7cpBIDJe%2FS%2Bw3ZbafkZI%2BQW5RcFkiUJo4Y0R1VPMy3k1FhXkiLIGEZnm8skJESk2upFoCmjvN7QYtABE8wKvV2dPqdAOPUozWBcxjLd8kSSBeQa908kgvljInhPr6m21mpoL33VQJHRP1TgvcAMM6h2MkGOqUB4TD96LwBffPFBnvXOC4KbHy2W65Byq4ZGb0UBmaIaZ1Yx%2FMSDhU7Bl%2BFdXxazOQItPeiTKAh1oOES8jPC3qz2OR4YN08nF7X4Zqjcy7VWoOafHNf9UB1wyACY2R%2BQbAKKTpCs7aSk74mU1Zm8NifTa5sQNXhJV3yXOKDvY4Fk8Vd9OE5sNuJbXZHovfF6XncSCSr7qWDNFoeWfX39AFRo8w4QRwW&X-Amz-Signature=3bd1124b6f1f9b5dd4fb6a87005ca74a83573ce788d34fc432589af12f5cd1fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

