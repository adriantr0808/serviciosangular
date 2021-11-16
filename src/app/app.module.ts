import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { ComicComponent } from './components/comic/comic.component';
import { MenuComponent } from './components/menu/menu.component';
import { appRoutingProviders, routing } from './app.routing';
import { ComicsinyeccionComponent } from './components/comicsinyeccion/comicsinyeccion.component';
import { ComicsService } from './services/comic.service';
import { HttpClientModule } from '@angular/common/http';
import { PersonasapiComponent } from './components/personasapi/personasapi.component'
import { ServicePersonas } from './services/personas.service';
import { ServiceEmpleado } from './services/empleado.service';
import { EmpleadossalarioComponent } from './components/empleadossalario/empleadossalario.component';
import { EmpleadosoficioComponent } from './components/empleadosoficio/empleadosoficio.component';
import { ServiceEmpleado2 } from './services/empleado2.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LibreriaComponent,
    ComicComponent,
    MenuComponent,
    ComicsinyeccionComponent,
    PersonasapiComponent,
    EmpleadossalarioComponent,
    EmpleadosoficioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders, ComicsService, ServicePersonas, ServiceEmpleado, ServiceEmpleado2],
  bootstrap: [AppComponent]
})
export class AppModule { }
