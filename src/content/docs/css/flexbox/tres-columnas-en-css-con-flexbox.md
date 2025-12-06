---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6R76ATM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T200008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxlfeVKn3v%2F2WaKmHt6MZvIkSCMR08TehP02dQR4onoQIgLaI%2BPSRVYR9cZfhXwrcXQa3ptTJaVRygNytYmetBY1Qq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJyNhPuwqzJisNyiWSrcA4q3ldzsp45vtjdg2wiCB0Oe5yI%2BA5g1b6pANIB%2FlQhyZFyQD13ZjlDJLTLNwnFc0Bg27YHtsWhwMR%2F4ZJwitQzLHchiFLe6DRwKqXGGexsa9RcL5bigoRI6W%2B4BtUnmPN9BYIJHJ%2Bvs5GbCc%2Bha4uny6JimFolra9xQVY%2BsJHDWEFgVbZGLdi5JXITAJlcYS01qkpdu2HQWRR3r5oYv5dLREkHJWC7Zw2EdzpsK%2BwRoZDtOa%2BH5zGWPKP%2BypqCqWFAJWji0hmWpsIGaJaE%2BmN0CuIyuHTlUociq7MnHEiIkbT%2F4juJyx2xH3pF2hI8PccEvBMRc37SCwDTFe4wL4xvT06wJrxeHcFfDWb6nSVlbsOl2PJzbMDFnO7SCutWQw6lj2ebePKlT9eAVBOl8GbVKxjj1u%2BVegdRv4bH5n9mXCgVDHVI8lULjkeaYwLX81SvoGNTGCg3NlayDSkMdEqf3mCLn0vbIYwb7udCmbqOqImA75Q1HjEemG5%2BJhLhJPFGqCdxZ6dl2F2ArD2Q%2ByXGRz10Q%2BjVV3YFtobUhelZ6RCZX9RwSsYCocPf6Vbeld4cV90nfLt5veO3mC%2BbRun0XRvvkpRad7SBiAMVG%2BUBk%2B87FaEewDeRc8RaEMJ3C0ckGOqUBH4UuHntKu3kPttMgCeJwgmmpxYARIcJYOkuP1YpPLUOKS%2FhSzgjGm0wV9wA5ziXott%2F1EFf1QFscihPLNQTvIWIY%2F%2FbVoir7ebvY%2BeXhOdHQETyK0Zo0MvXaBr3bpLdSv12mRlQPokESCKxam%2BKICZBDY7UDQEQBynzw4zn3HV%2F39ielAGS3PjQy2VjwPGI5jk4HB075yE8yrl2yjrssCQq3yk1Z&X-Amz-Signature=2e47ab04d22e0044973802d419bc744202cbaf7fbdd7ae92df7b76757e395c03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6R76ATM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T200008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxlfeVKn3v%2F2WaKmHt6MZvIkSCMR08TehP02dQR4onoQIgLaI%2BPSRVYR9cZfhXwrcXQa3ptTJaVRygNytYmetBY1Qq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJyNhPuwqzJisNyiWSrcA4q3ldzsp45vtjdg2wiCB0Oe5yI%2BA5g1b6pANIB%2FlQhyZFyQD13ZjlDJLTLNwnFc0Bg27YHtsWhwMR%2F4ZJwitQzLHchiFLe6DRwKqXGGexsa9RcL5bigoRI6W%2B4BtUnmPN9BYIJHJ%2Bvs5GbCc%2Bha4uny6JimFolra9xQVY%2BsJHDWEFgVbZGLdi5JXITAJlcYS01qkpdu2HQWRR3r5oYv5dLREkHJWC7Zw2EdzpsK%2BwRoZDtOa%2BH5zGWPKP%2BypqCqWFAJWji0hmWpsIGaJaE%2BmN0CuIyuHTlUociq7MnHEiIkbT%2F4juJyx2xH3pF2hI8PccEvBMRc37SCwDTFe4wL4xvT06wJrxeHcFfDWb6nSVlbsOl2PJzbMDFnO7SCutWQw6lj2ebePKlT9eAVBOl8GbVKxjj1u%2BVegdRv4bH5n9mXCgVDHVI8lULjkeaYwLX81SvoGNTGCg3NlayDSkMdEqf3mCLn0vbIYwb7udCmbqOqImA75Q1HjEemG5%2BJhLhJPFGqCdxZ6dl2F2ArD2Q%2ByXGRz10Q%2BjVV3YFtobUhelZ6RCZX9RwSsYCocPf6Vbeld4cV90nfLt5veO3mC%2BbRun0XRvvkpRad7SBiAMVG%2BUBk%2B87FaEewDeRc8RaEMJ3C0ckGOqUBH4UuHntKu3kPttMgCeJwgmmpxYARIcJYOkuP1YpPLUOKS%2FhSzgjGm0wV9wA5ziXott%2F1EFf1QFscihPLNQTvIWIY%2F%2FbVoir7ebvY%2BeXhOdHQETyK0Zo0MvXaBr3bpLdSv12mRlQPokESCKxam%2BKICZBDY7UDQEQBynzw4zn3HV%2F39ielAGS3PjQy2VjwPGI5jk4HB075yE8yrl2yjrssCQq3yk1Z&X-Amz-Signature=c8726dfded11c873424e64884b378ca544963b4cc95569cc2787b96259727c5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

