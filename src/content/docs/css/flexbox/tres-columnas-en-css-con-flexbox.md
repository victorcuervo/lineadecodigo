---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAQEFJ46%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T133901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG8zzjdfbVS5elr%2FEIOGAmanwXJfu6EGta%2Bss9YOPEzgIhAPywxAagoVbBQQkQjVMmg5GYoYT75yyUmR3Kh93hQFXcKv8DCFsQABoMNjM3NDIzMTgzODA1IgySaBVzeOp1fdrgPO4q3APKAtSBB0mdBGeIoPkwVT1KelFAHLonVdwkGmET2HkEptvMJQLABK6nkt5dg3DNZV4IvW5BQk4HE5Bfbes2HsTqdN7HGIr5F%2F5j%2Bo16JSVYPxFMvLj93WR8KiZkUYgmxyqb8JWtTTatQmX7VViNB%2FccWnKspS3MpgS7lDvGyCpAA2FXQKYHQ6ep6PYh9ngDay2f%2FIDGPNv%2B0CD39%2BpNIHWbr4OVMkB8wpeY5qeowziozsUM8cjzaUkWunE1dcTaH2vvviOwIJq62Hm23nUe6WO9vqnY2iIhLA9wGaMUH1LrFynY5Xwnzme0veD1fq2qPuL5Qma3k3wcrRclDjJZRf7DzxYLiTgNrjX7G4gHAeGVkol6YZYS2CjRY%2BsSgm4pcE34s%2BOSqxzXqLci%2FV5AeDVOB0izEUOLT8SVLTtkNAIzBYUvAA8YhvM1WXYRn2%2BDvkHiHSxATIKMDRXhKspxXVsuIYF94D3AeupythQTkud8n3O2qVyHPgY6CeEbZ7epLDxBMFpSKEVJEO4R5idFu8HlfsKt07xbaYXqSWIupEw80Z5kFV6kbc974Fy9%2BzyPItL5i3sGvgV%2FZcooYzjYAB716f93FTJuMrX%2FlQbt%2FfhXbi8R3mVkYPrOVhdLBTCTz8rJBjqkAcZ5C7v8VogiHVO6x49q4Zqr48RbQL9F73MqYP4svrnunu9Tqd0QvRcagAR1bYNJ%2F9Asi7ccl39YsTbX15NUhe9K5S0mRS1wSEh45TmU72ayfpRy1tLBZwj6nfKNkkdzCGYraBzfpY2QBzn7NeVX7vYm%2FXmgihupQmQwQPMWNJTRd4hnOTjHKW9Rsg4FXkSJ66lUW5%2BT2amZOLM8e8JKKoOkd0Gs&X-Amz-Signature=f805c20f0171f3499103854bec0a077d5d6cb6215e2ac69dcd35377b565e1329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAQEFJ46%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T133901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG8zzjdfbVS5elr%2FEIOGAmanwXJfu6EGta%2Bss9YOPEzgIhAPywxAagoVbBQQkQjVMmg5GYoYT75yyUmR3Kh93hQFXcKv8DCFsQABoMNjM3NDIzMTgzODA1IgySaBVzeOp1fdrgPO4q3APKAtSBB0mdBGeIoPkwVT1KelFAHLonVdwkGmET2HkEptvMJQLABK6nkt5dg3DNZV4IvW5BQk4HE5Bfbes2HsTqdN7HGIr5F%2F5j%2Bo16JSVYPxFMvLj93WR8KiZkUYgmxyqb8JWtTTatQmX7VViNB%2FccWnKspS3MpgS7lDvGyCpAA2FXQKYHQ6ep6PYh9ngDay2f%2FIDGPNv%2B0CD39%2BpNIHWbr4OVMkB8wpeY5qeowziozsUM8cjzaUkWunE1dcTaH2vvviOwIJq62Hm23nUe6WO9vqnY2iIhLA9wGaMUH1LrFynY5Xwnzme0veD1fq2qPuL5Qma3k3wcrRclDjJZRf7DzxYLiTgNrjX7G4gHAeGVkol6YZYS2CjRY%2BsSgm4pcE34s%2BOSqxzXqLci%2FV5AeDVOB0izEUOLT8SVLTtkNAIzBYUvAA8YhvM1WXYRn2%2BDvkHiHSxATIKMDRXhKspxXVsuIYF94D3AeupythQTkud8n3O2qVyHPgY6CeEbZ7epLDxBMFpSKEVJEO4R5idFu8HlfsKt07xbaYXqSWIupEw80Z5kFV6kbc974Fy9%2BzyPItL5i3sGvgV%2FZcooYzjYAB716f93FTJuMrX%2FlQbt%2FfhXbi8R3mVkYPrOVhdLBTCTz8rJBjqkAcZ5C7v8VogiHVO6x49q4Zqr48RbQL9F73MqYP4svrnunu9Tqd0QvRcagAR1bYNJ%2F9Asi7ccl39YsTbX15NUhe9K5S0mRS1wSEh45TmU72ayfpRy1tLBZwj6nfKNkkdzCGYraBzfpY2QBzn7NeVX7vYm%2FXmgihupQmQwQPMWNJTRd4hnOTjHKW9Rsg4FXkSJ66lUW5%2BT2amZOLM8e8JKKoOkd0Gs&X-Amz-Signature=4b31b2337ff1b572cbf482f283abfae8e45f8552a712a182d91b7c5e8ee198a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

