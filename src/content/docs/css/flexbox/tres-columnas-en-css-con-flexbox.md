---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627MC4IX4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCA%2FhhpD4Cz6fYe5THI3y%2BGmkBPyJk9pUg9VziDgzXPQAIhAIE1Uo6j8nDeR3JoPAkUotC1VDczrFuqO%2FkQ0G2GVg7CKv8DCD4QABoMNjM3NDIzMTgzODA1Igy%2Fsqq9G2eE7WZqmhkq3ANoletR3%2FPaVLIU3SeZSRfqZNtcDk%2BtZslPmvDwnIsVQYvIecu6yMkJ9CAUyH8YUY2tB3IYg8zi0enmdThZ1e8fokgwbvBwj9s%2BegoLGifkA2Cs8hoOmgIElLpr6gEWXtT8zb5BE5Di3acpU3KgZsPJLT%2BF9Rz9AhQjrTIntHw103jHBqMJHVMXS8eeMUJ0PbPqPhmLy9gDJ%2F2Yn18TKBVV9jrBHypsyciKa47r4AWIy%2BR49ntEzRRTLmdmBmVF3XExP5sn8%2F46ugWWC2aSZTXdqvkeiEGQmJMwRDJAzZ1o540w6NbsfeGyPfI3GAkOMl3EtYIa26l0L1ECVqnDzLYBp4EhLRujBxCVdfpXnMuBc%2B5kTLSKn517GkHZjfsrSRja%2FdeK%2Bm29DpiMZMvQVliUXjnvYI4i4mB7hqLGSZNEETgutelWyyzPbuTPlvtunFedZ5wHRX9s1GpVbcvdbrcH2ObYSGJ9lzRM9wDoV8qJPWHbqWnJBWwvHfvYixJKxu7Fs9PUi04jhXKnPhI%2Bx%2FjY7SSr3cDiG%2B2mfZAtUwZa%2FkcHESKHWxYQhTM4MnUPyMkRtPa1p4MkGnjyG%2BAltGF7neE%2FGZD1WgAWJp4GdmhMSsvJyQasSK1k0I0JCTDNrsTJBjqkAcAtpFawRYIlbSdRSDjewOlrDBnWIVNv0ttFDTostBEYCYQWv5ZIOm9WvANsUQa38x3U%2BuBqNxvCONzmw4MwaxMpOhmiP5d1JGnytNV18IRWoVXiaPWUolm9%2BPMTbmJtd8iaetoIiJOFya2kGTzQzh93Zc2P7R10vAX0xizYhPk8VI3zz%2BAI%2F968n%2FOmXf8Ldm3fDeaXwA5gsUjSLFwBo8mtDKHH&X-Amz-Signature=5dea829d3730b68bd1ecc69532074e20fcadd5b587fd035d991ccae83eac11cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627MC4IX4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCA%2FhhpD4Cz6fYe5THI3y%2BGmkBPyJk9pUg9VziDgzXPQAIhAIE1Uo6j8nDeR3JoPAkUotC1VDczrFuqO%2FkQ0G2GVg7CKv8DCD4QABoMNjM3NDIzMTgzODA1Igy%2Fsqq9G2eE7WZqmhkq3ANoletR3%2FPaVLIU3SeZSRfqZNtcDk%2BtZslPmvDwnIsVQYvIecu6yMkJ9CAUyH8YUY2tB3IYg8zi0enmdThZ1e8fokgwbvBwj9s%2BegoLGifkA2Cs8hoOmgIElLpr6gEWXtT8zb5BE5Di3acpU3KgZsPJLT%2BF9Rz9AhQjrTIntHw103jHBqMJHVMXS8eeMUJ0PbPqPhmLy9gDJ%2F2Yn18TKBVV9jrBHypsyciKa47r4AWIy%2BR49ntEzRRTLmdmBmVF3XExP5sn8%2F46ugWWC2aSZTXdqvkeiEGQmJMwRDJAzZ1o540w6NbsfeGyPfI3GAkOMl3EtYIa26l0L1ECVqnDzLYBp4EhLRujBxCVdfpXnMuBc%2B5kTLSKn517GkHZjfsrSRja%2FdeK%2Bm29DpiMZMvQVliUXjnvYI4i4mB7hqLGSZNEETgutelWyyzPbuTPlvtunFedZ5wHRX9s1GpVbcvdbrcH2ObYSGJ9lzRM9wDoV8qJPWHbqWnJBWwvHfvYixJKxu7Fs9PUi04jhXKnPhI%2Bx%2FjY7SSr3cDiG%2B2mfZAtUwZa%2FkcHESKHWxYQhTM4MnUPyMkRtPa1p4MkGnjyG%2BAltGF7neE%2FGZD1WgAWJp4GdmhMSsvJyQasSK1k0I0JCTDNrsTJBjqkAcAtpFawRYIlbSdRSDjewOlrDBnWIVNv0ttFDTostBEYCYQWv5ZIOm9WvANsUQa38x3U%2BuBqNxvCONzmw4MwaxMpOhmiP5d1JGnytNV18IRWoVXiaPWUolm9%2BPMTbmJtd8iaetoIiJOFya2kGTzQzh93Zc2P7R10vAX0xizYhPk8VI3zz%2BAI%2F968n%2FOmXf8Ldm3fDeaXwA5gsUjSLFwBo8mtDKHH&X-Amz-Signature=695d7399c3ee052c0a663557db3559c57eca9e468c8a1cb255db0b697667b557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

