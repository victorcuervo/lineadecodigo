---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654FPFOGP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC88P81dwgxAuzXPFsMe6K4AXHT1kWmSp8lAO0kyreUvAIhAJNFlFc2eU1OR9J3tbdFpYxwT0q10lJ1ikV6GfiJY%2FipKv8DCH8QABoMNjM3NDIzMTgzODA1IgzoPBl%2FARPo1IcX7f4q3ANw6zP4TZWfa%2Fctge0x6DVD23i7HObjG2tZttfv%2BZqqqFqB8qqN06QXvopcSzGms0WoK1oSbcVMJVMWnivhxHH2cZ9fIKmfDv015dlxFiTinnYpOdHie6rC1wRrqCDaNOgKbkDlu4oxcZnpqXdlGHMByUxvgNFYrO4lg9tYRt%2FVXlG1WUGc9FWT4A%2FOEx8nFmddNk1Q%2FyejFWPWXX24PteRPw4McBbDluiwklISsQoIp3oL560eToNdisvMcNRn40jvCVMuuBg4NE4I0F9BCCVDyoBXoQXcYtshtc8UCm%2FbENsZvmg5R9DJpyQg0WT%2BFJrXCpGJdHEDedsIgfn2taqJg9Ch3Ym9fwBN53O%2FS077OrYrAA6%2FVHUBZajR2AMES6MlDZsKc%2B6QYJOf6KFw97GmIkqXScCARBqlXrNeyPrOBRR%2BFBxER7BFPPaegZQWubsmbFSW6YNon9L51pHB3%2F8GWCeaVUAxb%2BpyqM6Rt4cNmJC1IpN3YFmb0etv5XxVqQX2YriuRHcyPRQUjlJbVApO5lwV%2F6ynfq2Lj93vWOL5SYQXJvTlBMbdR7WmK55dEyzM%2FHnq4i8Ta85747aOAu6a7nuir8weJ35jSlW0QoCjfBxXqThUGVUfeGwfojDN09LJBjqkAcOVoeHI3IxFAccAke1UTPoGNA4yfUfobIy0E%2BegsBch4TKtls950wr%2B0Z9OXtXmp2yi5v4Pet2%2BdFrMNR89Jc%2BtKd6sX1703B1KV8tj4uAloWsHkiKD%2BkGcKTEu84hJqjAHjKDhL9qiBGSkKbBeMHfaIcD5%2BmCRB33lZs6Pe9oGQkVTk9i1awaHxOKVzTSsqxGkvTbjrwwZdvOze13kRZtXnMUH&X-Amz-Signature=b2c1f9448224a0e1d61e2a787752c4f8b3ff58990dca64f0843d361eb3388d99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654FPFOGP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC88P81dwgxAuzXPFsMe6K4AXHT1kWmSp8lAO0kyreUvAIhAJNFlFc2eU1OR9J3tbdFpYxwT0q10lJ1ikV6GfiJY%2FipKv8DCH8QABoMNjM3NDIzMTgzODA1IgzoPBl%2FARPo1IcX7f4q3ANw6zP4TZWfa%2Fctge0x6DVD23i7HObjG2tZttfv%2BZqqqFqB8qqN06QXvopcSzGms0WoK1oSbcVMJVMWnivhxHH2cZ9fIKmfDv015dlxFiTinnYpOdHie6rC1wRrqCDaNOgKbkDlu4oxcZnpqXdlGHMByUxvgNFYrO4lg9tYRt%2FVXlG1WUGc9FWT4A%2FOEx8nFmddNk1Q%2FyejFWPWXX24PteRPw4McBbDluiwklISsQoIp3oL560eToNdisvMcNRn40jvCVMuuBg4NE4I0F9BCCVDyoBXoQXcYtshtc8UCm%2FbENsZvmg5R9DJpyQg0WT%2BFJrXCpGJdHEDedsIgfn2taqJg9Ch3Ym9fwBN53O%2FS077OrYrAA6%2FVHUBZajR2AMES6MlDZsKc%2B6QYJOf6KFw97GmIkqXScCARBqlXrNeyPrOBRR%2BFBxER7BFPPaegZQWubsmbFSW6YNon9L51pHB3%2F8GWCeaVUAxb%2BpyqM6Rt4cNmJC1IpN3YFmb0etv5XxVqQX2YriuRHcyPRQUjlJbVApO5lwV%2F6ynfq2Lj93vWOL5SYQXJvTlBMbdR7WmK55dEyzM%2FHnq4i8Ta85747aOAu6a7nuir8weJ35jSlW0QoCjfBxXqThUGVUfeGwfojDN09LJBjqkAcOVoeHI3IxFAccAke1UTPoGNA4yfUfobIy0E%2BegsBch4TKtls950wr%2B0Z9OXtXmp2yi5v4Pet2%2BdFrMNR89Jc%2BtKd6sX1703B1KV8tj4uAloWsHkiKD%2BkGcKTEu84hJqjAHjKDhL9qiBGSkKbBeMHfaIcD5%2BmCRB33lZs6Pe9oGQkVTk9i1awaHxOKVzTSsqxGkvTbjrwwZdvOze13kRZtXnMUH&X-Amz-Signature=1bc777cbac6e5a66f30c6f1af80b88dc28f5162e89473c4dd932e0c376c136d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

